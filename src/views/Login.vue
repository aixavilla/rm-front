<template>
  <div class="container">
    <form @submit.prevent="login()">
      <div class="form-group row">
        <div class="col align-self-center">
          <input type="text" class="form-control" id="email" placeholder="Email" v-model="user.email">
        </div>
      </div>
      <div class="form-group row">
        <div class="col align-self-center">
          <input type="password" class="form-control" id="pass" placeholder="Password" v-model="user.password">
        </div>
      </div>
      <div class="form-group row">
        <div class="col align-self-center">
          <button type="submit" class="btn btn-primary my-3 btn-block">Ingresar</button>
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
import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        user: {
          email: '', password: ''
        },
        mensaje: ''
      }
    },
    methods: {
      ...mapMutations(['setLogin']),
      ...mapActions(['loginAction']),
      login(){
        user.login(this.user).then(res => {
          if(res.error){
            this.mensaje = res.message;
          }else{
            this.loginAction(res);
            this.user = {};
          }          
        });
      }
    }
  }
</script>