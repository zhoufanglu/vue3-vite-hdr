// @ts-ignore

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path'
import alias from './vite/alias'

// @ts-ignore
export default ({ mode }) =>{
  const env=loadEnv(mode, process.cwd());   // 获取.env文件里定义的环境变量
  console.log(12, env.VITE_PACK_NAME)
  return defineConfig({
  plugins: [vue()],
  resolve: {
    alias
  },
  build: {
    rollupOptions: {
      output: {
        // entryFileNames: env.VITE_PACK_NAME
      }
    },
    outDir: env.VITE_PACK_NAME
  }
  })
}
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         entryFileNames: import.meta.env.VITE_PACK_NAME
//       }
//     }
//   }
// })
