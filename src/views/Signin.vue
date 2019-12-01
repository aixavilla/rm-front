<template>
  <div class="container">
    <form @submit.prevent="userCreate()">
      <div class="form-group row">
        <div class="col align-self-center">
          <input type="text" class="form-control" id="name" placeholder="Nombre" v-model="user.name">
        </div>
      </div>
      <div class="form-group row">
        <div class="col align-self-center">
          <input type="text" class="form-control" id="lastName" placeholder="Apellido" v-model="user.lastname">
        </div>
      </div>
      <div class="form-group row">
        <div class="col align-self-center">
          <input type="text" class="form-control" id="email" placeholder="Email" v-model="user.email">
        </div>
      </div>
      <div class="form-group row">
        <div class="col align-self-center">
          <input type="password" class="form-control" id="pass" placeholder="Contraseña" v-model="user.password">
        </div>
      </div>
      <div class="form-group row">
        <div class="col align-self-center">
          <button type="submit" class="btn btn-primary my-3 btn-block">Sign in</button>
        </div>
      </div>
    </form>
    <div class="alert alert-danger" role="alert" v-if="mensaje != ''">
      {{mensaje}}
    </div>
  </div>
</template>

<script>
import user from '../services/user';
import router from '../router';
  export default {
    data() {
      return {
        user: {
          name: '', lastname: '', email: '', password: ''
        },
        mensaje: ''
      }
    },
    methods: {
      userCreate(){
        user.newUser(this.user).then(res => {
          console.log(res);
          if(res.error){
            this.mensaje = res.message
          }else{
            this.mensaje = res.message;
            router.push({name: 'login'})
            this.user = {};
          }
      });
        
      }
    }
  }
</script>