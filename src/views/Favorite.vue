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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in characters" :key="index">
          <th scope="row">{{item.id}}</th>
          <td>{{item.name}}</td>
          <td>{{item.status}}</td>
          <td>{{item.species}}</td>
          <td>{{item.gender}}</td>
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
  computed: {
    ...mapState(['token','userInfo'])
  },
  created(){
    this.listCharacter();
  },
  methods:{
    listCharacter(){
      character.allFavorite(this.userInfo, this.token).then(res => {
        this.characters = res.results;
      });
    }
  }    
}
</script>