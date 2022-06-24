import { createRouter, createWebHashHistory } from 'vue-router';

import RegPage from '@/views/Reg-page.vue'
import RegCompletePage from '@/views/Reg-complete-page.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: RegPage,
    },
    {
      path: '/Registration-complete',
      component: RegCompletePage,
    },
  ],
});