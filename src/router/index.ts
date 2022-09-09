import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue')
    },
    {
        path: '/404',
        name: '404',
        component: ()=> import('../views/404/index.vue'),
      },
  ]
})

export default router
