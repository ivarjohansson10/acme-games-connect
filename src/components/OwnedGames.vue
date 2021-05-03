<template>
  <div class="owned-games">
    <h5 v-if="games.length > 0">Games owned</h5>
    <ul class="list-group">
      <li class="list-group-item owned-game"
          v-for="game in games"
          v-bind:key="game.id">
          <div class="owned-game-container">
            <img class="float-left" v-bind:src="game.body.thumbnail" />
            <div><b>Game Name: </b>{{game.body.name}}</div>
            <div><b>Age Rating: </b>{{game.body.ageRestriction}}</div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">  
  
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import GameModel from '@/models/GameModel'
  
  @Component
  export default class OwnedGames extends Vue {
    
    @Prop({required: true}) userId!: string;
    
    get games() : GameModel[] {
      
      // Get only the ownerships that are connected with this user id
      const ownerships = this.$store.getters.getOwnershipsById(this.userId);
      
      let ownedGameIds:string[] = [];
      let ownedGames:GameModel[] = [];
      
      // Create an array of game ids which we are going to get from the store
      for(let i=0; i < ownerships.length; i++) {
        ownedGameIds.push(ownerships[i].body.ownedGameId)
      }
      
      // Remove duplicates from array in case user has multiple ownerships of same game
      ownedGameIds = ownedGameIds.filter((a, b) => ownedGameIds.indexOf(a) === b)
            
      // This getter will use the ownedGameIds array to filter the correct owned games
      return this.$store.getters.getGamesByIds(ownedGameIds)
      
    }
      
  }
  
</script>
