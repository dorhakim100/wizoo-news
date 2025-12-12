import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

import { ROUTES } from './const'

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: ROUTES.HOME, component: HomeView }],
  scrollBehavior: () => ({ top: 0 }),
})
