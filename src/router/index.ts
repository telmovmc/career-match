import { createRouter, createWebHistory } from 'vue-router'

import WelcomeItem from '@/components/TheWelcome.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeItem,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('@/views/JobsView.vue'), // lazy load
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'), // lazy load
    },
    {
      path: '/dev',
      children: [
        {
        path: '',
        name: 'dev',
        component: () => import('@/views/dev/DevHome.vue'),
        },
        {
        path: 'components',
        name: 'dev-components',
        component: () => import('@/views/dev/DevComponents.vue'),
        },
      ],
    },
  ],
})

export default router