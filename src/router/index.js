import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/LendingPage.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
