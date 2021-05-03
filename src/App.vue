<template>
  <div id="app">
    <div class="container-fluid header">
      <p><b>Acme</b> Games</p>
    </div>
    <div class="container-fluid">
      <div class="row">
        <userForm />
        <gameForm />
      </div>
      <div class="row">
        <userAccounts />
        <games />
        <ownerships />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator'
  
  import userForm from '@/components/forms/UserForm.vue'
  import userAccounts from '@/components/UserAccounts.vue'
  import gameForm from '@/components/forms/GameForm.vue'
  import games from '@/components/Games.vue'
  import ownerships from '@/components/Ownerships.vue'
  
  @Component({
    components: {
      userForm,
      gameForm,
      userAccounts,
      ownerships,
      games
    }
  })

  export default class App extends Vue {

  }
    
</script>

<style>
  @import './assets/style.css';
</style>
