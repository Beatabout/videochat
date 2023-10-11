import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import laravel from 'laravel-vite-plugin';
import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill';
import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill';


export default defineConfig({
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js"
        }
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue(),
    ],
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                
                assetFileNames: ({name}) => {
                    if (/\.(gif|webp|jpe?g|png|svg)$/.test(name ?? '')){
                        return 'assets/images/[name]-[hash][extname]';
                    }
                    
                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name]-[hash][extname]';   
                    }
                    // default value
                    // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
    // optimizeDeps: {
    //     esbuildOptions: {
    //       plugins: [
    //         NodeModulesPolyfills(),
    //         GlobalsPolyfills({
    //           process: true,
    //           buffer: true,
    //         }),
    //       ],
    //       define: {
    //         global: 'globalThis',
    //       },
    //     },
    // },
});
