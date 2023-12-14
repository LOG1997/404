import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
import Error01 from '@/views/Error-1/index.vue';
const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/404page',
        children: [
            {
                path: '/404page',
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
