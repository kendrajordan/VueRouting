<template>
<div class="row my-5">
  <div class="col-md-6 offset-md-3">
    <div class="card">
      <div class="card-body">
        <h3 class="text-center my-4">Signup</h3>
        <div class="form-group">
          <input v-bind:class="{'is-invalid':errors.name, 'is-valid':!errors.name && this.submitted}" v-model="name" type="text" placeholder="Name" class="form-control">
          <!-- name error-->
          <div class="errors" v-if="errors.name">
            <small class="text-danger" v-bind:key="error" v-for="error in errors.name">
              {{error}}
            </small>
          </div>
        </div>
        <div class="form-group">
          <!-- v-binding class stylings-->
          <!--
          Add an is-invalid class if error.email is truthy
          -->
          <input v-bind:class="{'is-invalid':errors.email, 'is-valid':!errors.email && this.submitted}" v-model="email" type="text" placeholder="Email" class="form-control">
          <!-- email error-->
          <div class="errors" v-if="errors.email">
            <small class="text-danger" v-bind:key="error" v-for="error in errors.email">
              {{error}}
            </small>
          </div>
        </div>
        <div class="form-group">
          <input v-bind:class="{'is-invalid':errors.password,'is-valid':!errors.password && this.submitted}" v-model="password" type="password" placeholder="Password" class="form-control">
          <!-- email error-->
          <div class="errors" v-if="errors.password">
            <small class="text-danger" v-bind:key="error" v-for="error in errors.password">
              {{error}}
            </small>
          </div>
        </div>
        <div class="form-group text-center">
        <button v-on:click="registerUser()" v-bind:disabled="loading" class="btn form-control btn-success">

          <i class="fas fa-spin fa-spinner" v-if="loading"></i>

          {{loading ? '':'Signup'}}

        </button>
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
          password:'',
          errors:{},
          submitted:false,
          loading:false
        }
      },
      methods:{
        registerUser:function(){
          this.loading =true;
            console.log(this.name,this.email,this.password);
            Axios.post('https://react-blog-api.bahdcasts.com/api/auth/register',{
            name:this.name,
            email:this.email,
            password:this.password
          }).then((response) =>{
            this.loading = false;
            this.submitted= true;
            const {data} = response.data;
            //this.$root is the vue instance in main.js
            this.$root.auth = data;
            //Store the authentication information
            localStorage.setItem('auth',JSON.stringify(data))
            //Push to home page when signed inspect
            this.$router.push('home');
          }).catch(({response}) =>{
            this.loading = false;
            this.submitted = true;
            this.errors =response.data;
          });
        }

      }
    }

</script>
