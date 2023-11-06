import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imageOptimizerPlugin } from './imageOptimizerPlugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [imageOptimizerPlugin(), react()],
  base: '/sam_torres_website',
});
