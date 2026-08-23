const API_URL = '/api/unsplash';

const requestPhotos = async (params, signal) => {
  const response = await fetch(`${API_URL}?${params.toString()}`, { signal });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || 'No se pudieron cargar las imágenes.');
  }

  return response.json();
};

export const searchPhotos = async (query, perPage = 30, signal) => {
  const params = new URLSearchParams({
    action: 'search',
    query,
    per_page: String(perPage)
  });

  const data = await requestPhotos(params, signal);
  return Array.isArray(data.results) ? data.results : [];
};

export const getInitialPhotos = async (perPage = 30, signal) => {
  const params = new URLSearchParams({
    action: 'list',
    per_page: String(perPage)
  });

  const data = await requestPhotos(params, signal);
  return Array.isArray(data) ? data : [];
};
