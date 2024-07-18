import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import pugPlugin from 'vite-plugin-pug'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    
    root: './dev',
    base: './',
    server: {
        host: true,
        port: 9000
    },
    build: {
        target: 'es2015',
        outDir: '../build',
        emptyOutDir: './',
        rollupOptions: {
            input: {
                index: resolve(__dirname, './dev/index.html'),
                components: resolve(__dirname, './dev/components.html'),
                home: resolve(__dirname, './dev/index.html'),
            },
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        },
    },
    resolve: {
        alias: [
            { 
                find: '@', 
                replacement: `${resolve(__dirname, './dev')}`
            }
        ],
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ],
        },
    },
    plugins: [
        pugPlugin(
            { 
                localImports: true 
            }, 
            { 
                baseUrl: resolve(__dirname, './dev')
            }
        ),
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpeg: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
        })
    ],
})
