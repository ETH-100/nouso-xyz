import { createRouter, createWebHistory } from 'vue-router'

const Layout = () => import('@/pages/layout.vue')
const Home = () => import('@/pages/home.vue')

const routes = [
  {
    path: '/',
    component: Layout,
    meta: { keepAlive: true },
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: { keepAlive: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
