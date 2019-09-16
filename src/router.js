import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chemicalenterprise',
      name: 'chemicalenterprise',
      component: () => import('../src/views/chemicalenterprise/index.vue')
    },
    {
      path: '/pointSource',
      name: 'pointSource',
      component: () => import('../src/views/pointSource/index.vue')
    },  
    {
      path: '/emergencydepartment',
      name: 'emergencydepartment',
      component: () => import('../src/views/emergencydepartment/index.vue')
    },      
  ]
})
