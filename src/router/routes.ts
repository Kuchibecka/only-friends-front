import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PostFeedPage.vue'),
        name: 'Home'
      },
      {
        path: '/profile',
        component: () => import('pages/ProfilePage.vue'),
        name: 'Profile',
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '/login',
        component: () => import('pages/Auth/AuthPage.vue'),
        name: 'Authentication'
      },
      {
        path: '/register',
        component: () => import('pages/Auth/RegistrationPage.vue'),
        name: 'Registration',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
