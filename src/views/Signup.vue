<template>
<div class="row my-5">
  <div class="col-md-6 offset-md-3">
    <div class="card">
      <div class="card-body">
        <h3 class="text-center my-4">SignUp</h3>
        <div class="form-group">
          <input v-model="name" type="text" placeholder="Name" class="form-control">
        </div>
        <div class="form-group">
          <input v-model="email" type="text" placeholder="Email" class="form-control">
        </div>
        <div class="form-group">
          <input v-model="password" type="password" placeholder="Password" class="form-control">
        </div>
        <div class="form-group text-center">
        <button v-on:click="registerUser()"class="btn form-control btn-success">SignUp</button>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
  //Making an API request for the information in the signup page
  /*
  1. Create an data function that accepts name, email and password data properties
  2.v-model the name email and password properties in the signup template
  3.Add a v-on:click and include the function registerUser()
  4.Add the registerUser function  in the methods section of this component
  5. Test to see if the function works with a console.log() for the current name, email and password
  6. Install axios and import it
  7.Make a axios.post api request
  */
  import Axios from 'axios';
    export default{
      data(){
        return{
          name:'',
          email:'',
          password:''
        }
      },
      methods:{
        registerUser:function(){
            console.log(this.name,this.email,this.password);
            Axios.post('https://react-blog-api.bahdcasts.com/api/auth/register',{
            name:this.name,
            email:this.email,
            password:this.password
          }).then((response) =>{
            const {data} = response.data;
            //this.$root is the vue instance in main.js
            this.$root.auth = data;
            //Store the authentication information
            localStorage.setItem('auth',JSON.stringify(data))
            //Push to home page when signed inspect
            this.$router.push('home');
          }).catch(({response}) =>{
            console.log(response);
          });
        }

      }
    }

</script>
