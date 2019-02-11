import Vue from 'vue'
import App from './App.vue'
//import Router
import router from './router'

Vue.config.productionTip = false

new Vue({
  //pass in the router in the vue instance
  router,
  render: h => h(App),
}).$mount('#app')
