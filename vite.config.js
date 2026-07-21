import { defineConfig } from 'vite';

export default defineConfig({
  // Repo is deployed at https://ayensajurry11-lgtm.github.io/jurry/ (double "r")
  base: '/jurry/',
  build: {
    cssCodeSplit: false,
  },
});
