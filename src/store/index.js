import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    userInfo: ''
  },
  mutations: {
    setLogin(state, payload){
      state.token = payload.token;
      if(payload.token === ''){
        state.userInfo = ''
      }else{
        state.userInfo = payload.userDB;
        router.push({name: 'home'});
      }
    }
  },
  actions: {
    loginAction({commit}, payload){
      localStorage.setItem('token', payload.token);
      commit('setLogin', payload);
    }
  },
  modules: {
  }
})
