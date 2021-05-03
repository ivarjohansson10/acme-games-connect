<template>
  <div v-if="gameOptions.length > 0" class="select-game">
    <select :id="'game-select-' + this.userId"
            class="form-control"
            @input="getOwnership">
      <option selected >Select a game to add to library</option>
      <option v-for="gameOption in gameOptions" 
              :value="gameOption.body.gameId"
              :key="gameOption.id">
        {{gameOption.body.name}}
      </option>
    </select>
    <div class="btn-group float-right">
      <button :id="'add-button-' + this.userId" class="btn btn-primary" @click="addOwnership" disabled>
        <b-icon icon="file-plus" />&nbsp;Add to Library
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { uuid } from 'vue-uuid'
  
  @Component
  export default class GameSelect extends Vue {
    
    @Prop({required: true}) userId!: string;
    
    public getOwnership() : void {
      
      const ownership : {
        ownershipId: string,
        userAccountId: string,
        ownedGameId: string,
        ownershipState: string,
        registrationDate: string
      } = {
        ownershipId: uuid.v1(),
        userAccountId: this.userId,
        ownedGameId: (document.getElementById('game-select-' + this.userId) as HTMLSelectElement).value,
        ownershipState: 'Owned',
        registrationDate: new Date().toLocaleDateString()
      }
    
      // For validation, just check that an ownership has all the required properties before submitting to store
      if(ownership.ownershipId === '' ||
         ownership.userAccountId === '' ||
         ownership.ownedGameId === '' ||
         ownership.ownershipState === '' ||
         ownership.registrationDate === '')
      {
        (document.getElementById('add-button-' + this.userId) as HTMLInputElement).disabled = true
      } else {
        (document.getElementById('add-button-' + this.userId) as HTMLInputElement).disabled = false
      }
      
      this.$store.dispatch('getOwnership', ownership)
    }
  
    public addOwnership() : void {
      
      // Disable button and reset select box
      (document.getElementById('add-button-' + this.userId) as HTMLInputElement).disabled = true;
      (document.getElementById('game-select-' + this.userId) as HTMLSelectElement).selectedIndex = 0;
      
      this.$store.dispatch('addOwnership')
      //this.$store.dispatch('clearOwnership')
    }
  
    get gameOptions() : void {
      return this.$store.getters.getGames
    }

  }
  
</script>
