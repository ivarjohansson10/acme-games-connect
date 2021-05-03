<template>
  <div v-if="ownerships.length > 0" id="ownerships" class="col-12 app-section gray-background">
    <h3>Ownerships</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="ownership in ownerships" v-bind:key="ownership.id">
        <div class="row">
          <div class="col-sm-8">
            <div><b>Ownership ID: </b>{{ownership.body.ownershipId}}</div>
            <div><b>User Account ID: </b>{{ownership.body.userAccountId}}</div>
            <div><b>Game ID: </b>{{ownership.body.ownedGameId}}</div>
            <div><b>State: </b>{{ownership.body.ownershipState}}</div>
            <div><b>Registration Date: </b>{{ownership.body.registrationDate}}</div>
          </div>
          <div class="col-sm-4">
            <div class="btn-group float-right">
              <button type="button" @click="change(ownership)" class="btn btn-primary toggle-ownership">
                <b-icon :icon="toggleHandler(ownership)" />
                {{ownership.body.ownershipState == 'Owned' ? 'Revoke' : 'Restore'}}
              </button>
              <button type="button" @click="remove(ownership)" class="btn btn-primary remove-ownership">
                <b-icon icon="file-minus" />&nbsp;Remove
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
  import OwnershipModel from '@/models/OwnershipModel'
  
  @Component
  export default class Ownerships extends Vue {
    
    // Change bootstrap icon on the toggle ownership button
    public toggleHandler(ownership : OwnershipModel) {
      return ownership.body.ownershipState == 'Owned' ?
        'toggle-on' :
        'toggle-off';
    }
    
    // Just switches the status of ownerships between Revoked and Owned
    public change(ownership : OwnershipModel) {
      this.$store.dispatch('changeOwnership', ownership)
    }
    
    public remove(ownership : OwnershipModel) {
      this.$store.dispatch('removeOwnership', ownership)
    }
    
    get ownerships() : void {
      return this.$store.getters.getOwnerships;
    }
  
  }
    
</script>
