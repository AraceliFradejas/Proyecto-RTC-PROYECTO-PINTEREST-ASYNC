const UNSPLASH_API_URL = 'https://api.unsplash.com';
const MAX_RESULTS = 30;

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Método no permitido.' });
  }

  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    return response.status(500).json({
      error: 'La aplicación no tiene configurada la clave de Unsplash.'
    });
  }

  const action = request.query.action === 'search' ? 'search' : 'list';
  const perPage = Math.min(
    Math.max(Number.parseInt(request.query.per_page, 10) || MAX_RESULTS, 1),
    MAX_RESULTS
  );
  const params = new URLSearchParams({ per_page: String(perPage) });
  let endpoint = '/photos';

  if (action === 'search') {
    const query = String(request.query.query || '').trim().slice(0, 100);
    if (!query) {
      return response.status(400).json({ error: 'Escribe un término de búsqueda.' });
    }

    endpoint = '/search/photos';
    params.set('query', query);
  } else {
    params.set('order_by', 'popular');
  }

  try {
    const unsplashResponse = await fetch(
      `${UNSPLASH_API_URL}${endpoint}?${params.toString()}`,
      { headers: { Authorization: `Client-ID ${accessKey}` } }
    );

    if (!unsplashResponse.ok) {
      const status = unsplashResponse.status === 429 ? 429 : 502;
      const message =
        status === 429
          ? 'Se ha alcanzado temporalmente el límite de Unsplash.'
          : 'Unsplash no ha podido responder correctamente.';
      return response.status(status).json({ error: message });
    }

    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return response.status(200).json(await unsplashResponse.json());
  } catch {
    return response.status(502).json({
      error: 'No se ha podido conectar con Unsplash. Inténtalo de nuevo.'
    });
  }
}
