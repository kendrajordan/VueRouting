import Vue from 'vue'
import App from './App.vue'
//import Router
import router from './router'

Vue.config.productionTip = false
//To share data throughout your application it is best to put it in your main.js file

const authData= localStorage.getItem("auth");
new Vue({
  //pass in the router in the vue instance
  router,
//  saving authentication information
  data:{
    auth: authData ? JSON.parse(authData): {}
  },
  render: h => h(App)
}).$mount('#app');
