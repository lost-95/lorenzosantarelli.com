// lorenzosantarelli.com Worker: serves the built site (dist/) and, under /f1-predictor/,
// the F1 Predictor web app. The app is a static site on Netlify, published from the
// `site` branch of lost-95/f1-predictor and refreshed by that repo's GitHub Action;
// proxying it keeps visitors on this domain.
const F1_ORIGIN = 'https://lorenzosantarelli-f1.netlify.app';
const F1_PREFIX = '/f1-predictor';
const FORWARD = ['accept', 'accept-encoding', 'accept-language', 'user-agent', 'if-none-match', 'if-modified-since'];

async function proxyF1(request, url) {
  if (!['GET', 'HEAD'].includes(request.method)) {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
  }
  const path = url.pathname.slice(F1_PREFIX.length).replace(/^\//, '');
  const headers = new Headers();
  for (const name of FORWARD) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  const upstream = await fetch(`${F1_ORIGIN}/${path}${url.search}`, { method: request.method, headers, redirect: 'manual' });
  const response = new Response(upstream.body, upstream);
  response.headers.delete('x-nf-request-id');
  return response;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === F1_PREFIX || url.pathname.startsWith(F1_PREFIX + '/')) {
      return proxyF1(request, url);
    }
    return env.ASSETS.fetch(request);
  },
};
