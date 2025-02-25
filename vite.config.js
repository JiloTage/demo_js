import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // GitHub Pagesでホストする際のベースURLを指定（リポジトリ名に置き換え）
    base: process.env.NODE_ENV === 'production' ? '/demo_js/' : '/',
    plugins: [react()]
});
