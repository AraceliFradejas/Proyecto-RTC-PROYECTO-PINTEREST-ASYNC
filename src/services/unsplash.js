// ============================================================
// SERVICIO DE LA API DE UNSPLASH
// ============================================================

// Obtenemos la clave desde las variables de entorno de Vite (.env) o la clave por defecto
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || 'jWJL0mb5jtxqK3bMMFfMILS-lHv2V0uPmW9_Eo9n-mo';
const BASE_URL = 'https://api.unsplash.com';

// Colección de fotos de demostración en caso de no tener clave aún o superar el límite
const MOCK_PHOTOS = [
  {
    id: 'mock-1',
    alt_description: 'Arquitectura moderna con líneas minimalistas',
    description: 'Edificio con diseño vanguardista',
    likes: 342,
    urls: {
      regular: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80'
    },
    links: {
      html: 'https://unsplash.com/photos/1513694203232'
    },
    user: {
      name: 'Elena Gómez',
      username: 'elenagomez',
      profile_image: {
        medium: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        small: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
      },
      links: {
        html: 'https://unsplash.com/@elenagomez'
      }
    }
  },
  {
    id: 'mock-2',
    alt_description: 'Bosque verde con niebla matutina',
    description: 'Naturaleza relajante en el bosque',
    likes: 890,
    urls: {
      regular: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&auto=format&fit=crop&q=80'
    },
    links: {
      html: 'https://unsplash.com/photos/1448375240586'
    },
    user: {
      name: 'Carlos Ruiz',
      username: 'carlosruiz',
      profile_image: {
        medium: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        small: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
      },
      links: {
        html: 'https://unsplash.com/@carlosruiz'
      }
    }
  },
  {
    id: 'mock-3',
    alt_description: 'Gatito curioso mirando a la cámara',
    description: 'Fotografía de mascota adorable',
    likes: 1250,
    urls: {
      regular: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80'
    },
    links: {
      html: 'https://unsplash.com/photos/1514888286974'
    },
    user: {
      name: 'Laura Martín',
      username: 'lauramartin',
      profile_image: {
        medium: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
        small: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
      },
      links: {
        html: 'https://unsplash.com/@lauramartin'
      }
    }
  },
  {
    id: 'mock-4',
    alt_description: 'Café latte con diseño de arte latte en mesa de madera',
    description: 'Momento de café matutino',
    likes: 410,
    urls: {
      regular: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&auto=format&fit=crop&q=80'
    },
    links: {
      html: 'https://unsplash.com/photos/1501339847302'
    },
    user: {
      name: 'David Santos',
      username: 'davidsantos',
      profile_image: {
        medium: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        small: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
      },
      links: {
        html: 'https://unsplash.com/@davidsantos'
      }
    }
  },
  {
    id: 'mock-5',
    alt_description: 'Playa paradisíaca con aguas turquesas y palmeras',
    description: 'Vacaciones de verano en el mar',
    likes: 980,
    urls: {
      regular: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80'
    },
    links: {
      html: 'https://unsplash.com/photos/1507525428034'
    },
    user: {
      name: 'Sofía Navarro',
      username: 'sofianavarro',
      profile_image: {
        medium: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
        small: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80'
      },
      links: {
        html: 'https://unsplash.com/@sofianavarro'
      }
    }
  },
  {
    id: 'mock-6',
    alt_description: 'Espacio de trabajo moderno con ordenador y plantas',
    description: 'Setup minimalista de trabajo',
    likes: 670,
    urls: {
      regular: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80'
    },
    links: {
      html: 'https://unsplash.com/photos/1498050108023'
    },
    user: {
      name: 'Marcos Gil',
      username: 'marcosgil',
      profile_image: {
        medium: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
        small: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80'
      },
      links: {
        html: 'https://unsplash.com/@marcosgil'
      }
    }
  },
  {
    id: 'mock-7',
    alt_description: 'Puesta de sol dorada sobre montañas nevadas',
    description: 'Atardecer en la montaña',
    likes: 1540,
    urls: {
      regular: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80'
    },
    links: {
      html: 'https://unsplash.com/photos/1464822759023'
    },
    user: {
      name: 'Lucía Morales',
      username: 'luciamorales',
      profile_image: {
        medium: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
        small: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80'
      },
      links: {
        html: 'https://unsplash.com/@luciamorales'
      }
    }
  },
  {
    id: 'mock-8',
    alt_description: 'Coche clásico vintage en calle colonial',
    description: 'Estilo retro urbano',
    likes: 820,
    urls: {
      regular: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&auto=format&fit=crop&q=80'
    },
    links: {
      html: 'https://unsplash.com/photos/1503376780353'
    },
    user: {
      name: 'Javier Pérez',
      username: 'javierperez',
      profile_image: {
        medium: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
        small: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80'
      },
      links: {
        html: 'https://unsplash.com/@javierperez'
      }
    }
  }
];

/**
 * Función para buscar fotos según un término
 */
export const searchPhotos = async (query = 'inspiration', perPage = 30) => {
  // Si no hay clave de API configurada, filtramos las fotos de demostración
  if (!ACCESS_KEY || ACCESS_KEY === 'tu_access_key_aqui') {
    const term = query.toLowerCase();
    const filtered = MOCK_PHOTOS.filter(
      (p) =>
        p.alt_description.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.user.name.toLowerCase().includes(term)
    );
    return filtered.length > 0 ? filtered : MOCK_PHOTOS;
  }

  try {
    const endpoint = `${BASE_URL}/search/photos?query=${encodeURIComponent(
      query
    )}&per_page=${perPage}&client_id=${ACCESS_KEY}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
      console.warn('Error con la API de Unsplash. Usando datos de respaldo.');
      return MOCK_PHOTOS;
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error al obtener fotos:', error);
    return MOCK_PHOTOS;
  }
};

/**
 * Función para obtener fotos para la portada inicial
 */
export const getInitialPhotos = async (perPage = 30) => {
  if (!ACCESS_KEY || ACCESS_KEY === 'tu_access_key_aqui') {
    return MOCK_PHOTOS;
  }

  try {
    const endpoint = `${BASE_URL}/photos?per_page=${perPage}&order_by=popular&client_id=${ACCESS_KEY}`;
    const response = await fetch(endpoint);

    if (!response.ok) {
      return await searchPhotos('inspiration', perPage);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : MOCK_PHOTOS;
  } catch (error) {
    console.error('Error al cargar fotos iniciales:', error);
    return MOCK_PHOTOS;
  }
};
