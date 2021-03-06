import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // scrollBehavior: (to, from, savedPosition) => {
  //   if (to.hash) return { selector: to.hash }
  //   if (savedPosition) return savedPosition

  //   return { x: 0, y: 0 }
  // },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Home.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404.vue'),
        },
      ],
    },
  ],
});

export default router;
