import {RouteRecordRaw} from 'vue-router'

const home = () => import('@/views/home.vue')

/*import adminRoutes from './modules/admin'
import manageRoutes from './modules/manage'*/


const routes = [
  {
    path: '/home',
    component: home,
  },
  {
    path: '/',
    redirect: '/home'
  },
/*  ...manageRoutes,
  ...adminRoutes*/
] as RouteRecordRaw[]
export default routes
