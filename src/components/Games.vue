<template>
  <div v-if="games.length > 0" id="games" class="col-12 app-section">
    <h3>Games</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="game in games" v-bind:key="game.gameId">
        <div class="row">
          <div class="col-sm-8">
            <div><b>Game ID: </b>{{game.body.gameId}}</div>
            <div><b>Name: </b>{{game.body.name}}</div>
            <div><b>AgeRestriction: </b>{{game.body.ageRestriction}}</div>
            <div><b>Thumbnail: </b>{{game.body.thumbnail}}</div>
          </div>
          <div class="col-sm-4">
            <div class="btn-group float-right">
              <button type="button" @click="edit(game)" class="btn btn-primary edit-game">
                <b-icon icon="pencil-square" />&nbsp;Edit
              </button>
              <button type="button" @click="remove(game)" class="btn btn-primary remove-game">
                <b-icon icon="x-circle" />&nbsp;Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  
  import { Component, Vue } from 'vue-property-decorator'
  import GameModel from '@/models/GameModel';
  
  @Component
  
  export default class Games extends Vue {
    
    public edit(game : GameModel) {
      this.$store.dispatch('editGame', game)
      
      const gameNameInput = (document.getElementById('game-title') as HTMLInputElement)
      
      // If this input exists, focus browser on this
      if(typeof(gameNameInput) != 'undefined' && gameNameInput != null){
          gameNameInput.focus()
      }
      
    }
    
    public remove(game : GameModel) {
      this.$store.dispatch('removeGame', game)
    }
    
    get games() : void {
      return this.$store.getters.getGames
    }
    
  }
  
</script>
