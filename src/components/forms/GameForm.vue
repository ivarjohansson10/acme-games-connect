<template>
  <div id="add-game" class="col-sm-6 form">    
    <h4>Add Game</h4>
    <div class="form-group">
    <input id="game-id"
           type="hidden"
           :value="newGame.gameId">
    <input id="game-title"
           class="form-control"
           :value="newGame.name"
           @blur="getGame"
           autocomplete="off"
           placeholder="Name of game...">
    <select id="age-restriction"
           class="form-control"
           :value="newGame.ageRestriction"
           @change="getGame">
      <option value="" disabled selected>Age Restriction</option>
      <option value="3">3</option>
      <option value="7">7</option>
      <option value="12">12</option>
      <option value="16">16</option>
      <option value="18">18</option>
    </select>
    <input id="thumbnail"
           class="form-control"
           :value="newGame.thumbnail"
           @blur="getGame"
           autocomplete="off"
           placeholder="Thumbnail...">
    <button id="add-game-button" class="btn btn-primary" @click="addGame" disabled>
      <b-icon icon="file-plus" />&nbsp;Add Game
    </button>
    </div>
  </div>
</template>

<script lang="ts">
  
  import { Component, Vue } from 'vue-property-decorator';
  import { uuid } from 'vue-uuid';

  @Component
  export default class GameForm extends Vue {
    
    public getGame() : void {
      const game : {
        gameId : string,
        name : string,
        ageRestriction : string,
        thumbnail : string
      } = {
        
        // If game is being edited, gameID field should be set to prevent new id being generated
        gameId: (document.getElementById('game-id') as HTMLInputElement).value === '' ? uuid.v1() : (document.getElementById('game-id') as HTMLInputElement).value,
        name: (document.getElementById('game-title') as HTMLInputElement).value,
        ageRestriction: (document.getElementById('age-restriction') as HTMLInputElement).value,
        thumbnail: (document.getElementById('thumbnail') as HTMLInputElement).value
      }
      
      // For validation, just check that a game has all the required properties before submitting to store
      if(game.gameId === '' ||
         game.name === '' ||
         game.ageRestriction === '' ||
         game.thumbnail === '')
      {
        (document.getElementById('add-game-button') as HTMLInputElement).disabled = true
      } else {
        (document.getElementById('add-game-button') as HTMLInputElement).disabled = false
      }
  
      this.$store.dispatch('getGame', game)
    }
  
    public addGame() : void {
      
      // Disable button to prevent user from trying to add an empty game
      (document.getElementById('add-game-button') as HTMLInputElement).disabled = true
      
      this.$store.dispatch('addGame')
      this.$store.dispatch('clearGame')
    }
    
    get newGame() : void {
      return this.$store.getters.newGame
    }

  }
    
</script>
