import {RouteRecordRaw} from 'vue-router'
const admin = () => import('@/layouts/admin.vue')
const user = () => import('@/views/admin/user.vue')

const adminRoutes = [
  {
    path: '/admin',
    component: admin,
    children: [
      {
        path: '/admin/user',
        component: user,
      }
    ]
  }
] as RouteRecordRaw[]

export default adminRoutes
