// Cloudflare Pages Function: serves /f1-predictor/* from the F1 Predictor static site
// (Netlify, published from the `site` branch of lost-95/f1-predictor and updated by its
// GitHub Action), so visitors stay on lorenzosantarelli.com.
const ORIGIN = 'https://lorenzosantarelli-f1.netlify.app';
const FORWARD = ['accept', 'accept-encoding', 'accept-language', 'user-agent', 'if-none-match', 'if-modified-since'];

export async function onRequest({ request, params }) {
  if (!['GET', 'HEAD'].includes(request.method)) {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
  }
  const url = new URL(request.url);
  const path = Array.isArray(params.path) ? params.path.join('/') : (params.path || '');
  const headers = new Headers();
  for (const name of FORWARD) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  const upstream = await fetch(`${ORIGIN}/${path}${url.search}`, { method: request.method, headers, redirect: 'manual' });
  const response = new Response(upstream.body, upstream);
  response.headers.delete('x-nf-request-id');
  return response;
}
