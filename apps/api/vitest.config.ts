import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    env: {
      NODE_ENV: 'test',
      CORS_ORIGIN: 'http://localhost:5173',
    },
  },
});
