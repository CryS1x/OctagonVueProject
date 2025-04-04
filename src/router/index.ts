import { createRouter, createWebHistory } from 'vue-router'
import Test from '../views/Home.vue'
import Space from '../views/Space.vue'
import People from '../views/People.vue'
import Apparatus from '../views/Apparatus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/Space',
      name: 'Space',
      component: () => import('../views/Space.vue'),
    },
    {
      path: '/People',
      name: 'People',
      component: () => import('../views/People.vue'),
    },
    {
      path: '/Apparatus',
      name: 'Apparatus',
      component: () => import('../views/Apparatus.vue'),
    },
  ],
})

export default router
