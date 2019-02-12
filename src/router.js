//import Vue
import Vue from 'vue'
//import Router
import Router from 'vue-router'
//import login and sign up

import Login from './views/Login.vue'

import Signup from './views/Signup.vue'

import Home from './views/Home.vue'

//use the Router
//This is where you register plugins with vue.js
Vue.use(Router)

//Create a Router
const router = new Router({

  //Add a routes array
  routes:[{
  //When the user goes through the login path load the login component
    path: '/login',
    component: Login
  },{
    path: '/signup',
    component: Signup
  },{
    path: '/home',
    component:Home
  }]

})
//export to main.js
export default router;
