// Components
import DashboardView from '@/views/DashboardView.vue'

// Utils
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
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
        {
          path: 'colors',
          name: 'dev-colors',
          component: () => import('@/views/dev/DevColors.vue'),
        },
      ],
    },
  ],
})

export default router