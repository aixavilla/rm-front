<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/RickandMorty-logo.png">
    <table class="table container">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Specie</th>
          <th scope="col">Gender</th>
          <th scope="col" v-if="token">Favorite</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in characters" :key="index">
          <th scope="row">{{item.id}}</th>
          <td>{{item.name}}</td>
          <td>{{item.status}}</td>
          <td>{{item.species}}</td>
          <td>{{item.gender}}</td>
          <td v-if="token"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" @click="saveFavorite(index)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import character from '../services/character';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  data(){
    return{
      characters: []
    }
  },
  created(){
    this.listCharacter();
  },
  computed: {
    ...mapState(['token','userInfo'])
  },
  methods:{
    ...mapMutations(['setLogin']),
    ...mapActions(['loginAction']),

    listCharacter(){
      character.allCharacter().then(res => {
        this.characters = res.results;
      });
    },
    saveFavorite(index){
      character.saveFavoriteUser(this.userInfo, this.characters[index],this.token).then(res => {
        if(res.error){
          this.mensaje = res.message;
        }else{
          //this.loginAction(res);
        }          
      })
    }
  }    
}
</script>