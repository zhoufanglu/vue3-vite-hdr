import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'
import routes from './routes'
import layoutRoutes from './autoLoad'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...layoutRoutes]
})

import './autoLoad.ts'

export function setupRouter(app: App) {
  app.use(router)
}

export default router
