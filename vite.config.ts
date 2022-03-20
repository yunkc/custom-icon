import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), svgLoader({ svgo: false })],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'api': resolve(__dirname, 'src/api'),
            'style': resolve(__dirname, 'src/assets/style')
        }
    }
});
