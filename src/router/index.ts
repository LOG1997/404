import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
import Error01 from '@/views/Error-1/index.vue';
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Error',
        component: Error01,
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
