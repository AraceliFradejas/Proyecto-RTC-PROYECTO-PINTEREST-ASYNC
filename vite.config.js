import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'UNSPLASH_');

  return {
    server: {
      proxy: {
        '/api/unsplash': {
          target: 'https://api.unsplash.com',
          changeOrigin: true,
          rewrite: (path) => {
            const url = new URL(path, 'http://localhost');
            const action = url.searchParams.get('action');
            url.searchParams.delete('action');
            return `${action === 'search' ? '/search/photos' : '/photos'}?${url.searchParams}`;
          },
          headers: env.UNSPLASH_ACCESS_KEY
            ? { Authorization: `Client-ID ${env.UNSPLASH_ACCESS_KEY}` }
            : {}
        }
      }
    }
  };
});
