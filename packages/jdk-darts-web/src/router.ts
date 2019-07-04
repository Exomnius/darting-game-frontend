import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'new-game',
    },
    {
      path: '/new-game',
      name: 'new-game',
      component: () => import(/* webpackChunkName: "new-game" */ './views/NewGame.vue'),
    },
  ],
});
