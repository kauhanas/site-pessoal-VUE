import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Portifolio',
      name: 'Portifolio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PortifolioView.vue')
    },
    {
      path: '/Hobbies',
      name: 'Hobbies',
      component: () => import('../views/HobbiesView.vue')
    }
  ]
})

export default router
