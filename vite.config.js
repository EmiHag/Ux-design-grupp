import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ⚠️ Ändra '/ditt-repo-namn/' till namnet på ditt GitHub-repo
export default defineConfig({
  plugins: [react()],
  base: '/Ux-design-grupp/',
});
