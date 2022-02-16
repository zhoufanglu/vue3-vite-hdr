import {createRouter, createWebHashHistory} from 'vue-router'
import {App} from 'vue'
// @ts-ignore
import routes from './routes.ts'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

// 路由 hooks
export function setUpRouter(app: App<Element>) {
  app.use(router)
}

export default router
