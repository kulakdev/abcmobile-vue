import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TestPage from '../views/TestPage.vue'
import FinalePage from '../views/FinalePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/test',
      name: 'test',

      component: TestPage
    },
    {
      path: '/finale',
      name: 'finale',

      component: FinalePage
    }
  ]
})

export default router
