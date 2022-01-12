const manage = () => import('@/views/manage.vue')
const mail = () => import('@/views/admin/mail.vue')

const manageRoutes = [
  {
    path: '/manage',
    component: manage,
    children: [
      {
        path: '/manage/manage',
        component: mail
      },
    ]
  }
]

export default manageRoutes
