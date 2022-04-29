import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('@/pages/calculator/main.vue'),
  },
  {
    path: '/music-player',
    name: 'MusicPlayer',
    component: () => import('@/pages/music-player/main.vue'),
  },
  {
    path: '/drag',
    name: 'Drag',
    component: () => import('@/pages/drag/main.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
