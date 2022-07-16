import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index'

const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/login',
    component: () => import('@/views/login/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
