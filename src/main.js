import Vue from 'vue'
import App from './app.vue'

// import router from './router'
// import store from './store'

import './assets/css/base.less'
import  router from './router';

/* 引入echarts */
import echarts from 'echarts'
// eslint-disable-next-line no-unused-vars
// import echartsLiquidfill from 'echarts-liquidfill' 

// import animated from 'animate.css'

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;
// Vue.use(animated);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
