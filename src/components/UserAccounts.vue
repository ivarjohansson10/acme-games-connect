<template>
  <div v-if="users.length > 0" id="user-accounts" class="col-12 app-section gray-background">
    <h3>Users</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users" v-bind:key="user.id">
        <div class="row">
          <div class="col-sm-8">
            <div><b>User ID: </b>{{user.body.userId}}</div>
            <div><b>First Name: </b>{{user.body.firstName}}</div>
            <div><b>Last Name: </b>{{user.body.lastName}}</div>
            <div><b>Email Address: </b>{{user.body.emailAddress}}</div>
            <div><b>Date of Birth: </b>{{user.body.dateOfBirth}}</div>
          </div>
          <div class="col-sm-4">
            <div class="btn-group float-right">
              <button type="button" @click="edit(user)" class="btn btn-primary edit-user">
                <b-icon icon="pencil-square" />&nbsp;Edit
              </button>
              <button type="button" @click="remove(user)" class="btn btn-primary remove-user">
                <b-icon icon="x-circle" />&nbsp;Remove
              </button>
            </div>
            <gameSelect :userId="user.body.userId" />
          </div>
        </div>
        <ownedGames :userId="user.body.userId" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  
  import { Component, Vue } from 'vue-property-decorator'
  import ownedGames from '@/components/OwnedGames.vue'
  import gameSelect from '@/components/forms/GameSelect.vue'
  import UserModel from '@/models/UserModel'
  
  @Component({
    components: {
      ownedGames,
      gameSelect
    }
  })
  
  export default class UserAccounts extends Vue {
    
    public edit(user : UserModel) {
      this.$store.dispatch('editUser', user)

      const nameInput = (document.getElementById('first-name') as HTMLInputElement)
      
      // If this input exists, focus browser on this
      if(typeof(nameInput) != 'undefined' && nameInput != null) {
          nameInput.focus()
      }
      
    }
    
    public remove(user : UserModel) {
      this.$store.dispatch('removeUser', user)
    }
    
    get users() : void {
      return this.$store.getters.getUsers
    }
    
  }
  
</script>
