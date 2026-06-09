import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readdirSync, existsSync } from 'fs';

// This automatically finds all your HTML files so Vite builds the whole project
function getHtmlInputs() {
  const inputs = {
    main: resolve(__dirname, 'Keystone.html')
  };
  
  const subFolders = ['services', 'marketing', 'app'];
  
  subFolders.forEach(folder => {
    const folderPath = resolve(__dirname, folder);
    if (existsSync(folderPath)) {
      readdirSync(folderPath).forEach(file => {
        if (file.endsWith('.html')) {
          const key = `${folder}-${file.replace('.html', '').replace(/\s+/g, '-')}`;
          inputs[key] = resolve(folderPath, file);
        }
      });
    }
  });
  
  return inputs;
}

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: getHtmlInputs()
    }
  }
});