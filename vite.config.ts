import {fileURLToPath, URL} from 'url'
import {createHtmlPlugin} from 'vite-plugin-html'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    console.log(command, mode)
    const env = loadEnv(mode, process.cwd())
    console.log(env)
    return {
        server: {
            host: true,
            port: 3008,
            // proxy: {
            //     '/api': 'http://unifit.ust.hk:8888/api'
            // }
        },
        plugins: [vue(), vueJsx(),
            // createHtmlPlugin({
            // minify: true,
            // entry: 'src/main.ts',
            // template: 'public/index.html',
            // inject: {
            //     data: {
            //         title: env.VITE_TITLE
            //     }
            // }
            // })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/style/global.scss";'
                }
            }
        }
    }
})
