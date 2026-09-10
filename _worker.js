// Cloudflare Workers entrypoint. This project was created as a Worker with
// static assets (Cloudflare deprecated Pages in April 2025), NOT a Pages
// project — so the functions/api/*.js "Pages Functions" convention is never
// auto-detected here. This _worker.js is the Workers equivalent: it handles
// the two OAuth routes itself and falls through to the ASSETS binding
// (the built Eleventy _site/ output) for everything else.

function renderCallbackBody(status, content) {
  const html = `
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    </script>
  `;
  return new Blob([html]);
}

async function handleAuth(request, env) {
  const client_id = env.GITHUB_CLIENT_ID;
  try {
    const url = new URL(request.url);
    const redirectUrl = new URL('https://github.com/login/oauth/authorize');
    redirectUrl.searchParams.set('client_id', client_id);
    redirectUrl.searchParams.set('redirect_uri', url.origin + '/api/callback');
    redirectUrl.searchParams.set('scope', 'repo user');
    redirectUrl.searchParams.set(
      'state',
      crypto.getRandomValues(new Uint8Array(12)).join(''),
    );
    return Response.redirect(redirectUrl.href, 302);
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}

async function handleCallback(request, env) {
  const client_id = env.GITHUB_CLIENT_ID;
  const client_secret = env.GITHUB_CLIENT_SECRET;
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': 'cloudflare-worker-github-oauth-login',
        'accept': 'application/json',
      },
      body: JSON.stringify({ client_id, client_secret, code }),
    });
    const result = await response.json();
    if (result.error) {
      return new Response(renderCallbackBody('error', result), {
        headers: { 'content-type': 'text/html;charset=UTF-8' },
        status: 401,
      });
    }
    const responseBody = renderCallbackBody('success', {
      token: result.access_token,
      provider: 'github',
    });
    return new Response(responseBody, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(error.message, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
      status: 500,
    });
  }
}

async function handleDemoAuth(request) {
  // Deliberately-broken auth endpoint for /demo. It redirects to GitHub's
  // authorize URL with an invalid client_id, so GitHub itself rejects the
  // request (client_id=demo-no-write-access is not a real registered OAuth
  // App) instead of this Worker silently doing nothing. There is no
  // corresponding callback handler and no client_secret anywhere for this
  // flow -- it is structurally incapable of ever producing a real token,
  // by construction, not just by omission.
  try {
    const url = new URL(request.url);
    const redirectUrl = new URL('https://github.com/login/oauth/authorize');
    redirectUrl.searchParams.set('client_id', 'demo-no-write-access');
    redirectUrl.searchParams.set('redirect_uri', url.origin + '/api/callback');
    redirectUrl.searchParams.set('scope', 'repo user');
    return Response.redirect(redirectUrl.href, 302);
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}

async function requireAdminAuth(request, env) {
  const expectedPassword = env.ADMIN_PASSWORD;
  if (!expectedPassword) {
    // No password configured -- fail closed rather than leaving /admin open.
    return new Response('Admin access is not configured.', { status: 503 });
  }

  const authHeader = request.headers.get('Authorization') || '';
  const [scheme, encoded] = authHeader.split(' ');

  if (scheme === 'Basic' && encoded) {
    const decoded = atob(encoded);
    const separatorIndex = decoded.indexOf(':');
    const password = separatorIndex === -1 ? decoded : decoded.slice(separatorIndex + 1);
    if (password === expectedPassword) {
      return null; // authorized
    }
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="RRCoP Admin"' },
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/admin' || url.pathname.startsWith('/admin/')) {
      const authResponse = await requireAdminAuth(request, env);
      if (authResponse) return authResponse;
    }

    if (url.pathname === '/api/auth') {
      return handleAuth(request, env);
    }
    if (url.pathname === '/api/demo-auth') {
      return handleDemoAuth(request);
    }
    if (url.pathname === '/api/callback') {
      return handleCallback(request, env);
    }

    // Everything else: serve the static Eleventy build.
    return env.ASSETS.fetch(request);
  },
};
