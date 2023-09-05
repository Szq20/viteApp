import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import proxyConfig from './proxy';
import {resolve} from 'path';


// https://vitejs.dev/config/
export default defineConfig({
    server: {
        ...proxyConfig,
    },
    resolve: {
        alias: {
            '@src': resolve('src'),
            '@routes': resolve('src/routes'),
        },
    },
     plugins: [react()],
})
