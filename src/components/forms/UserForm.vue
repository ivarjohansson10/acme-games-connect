<template>
  <div id="add-user" class="col-sm-6 form">
    <h4>Add User</h4>
    <input id="user-id"
           type="hidden"
           :value="newUser.userId">
    <input id="first-name"
           class="form-control"
           :value="newUser.firstName"
           @blur="getUser"
           autocomplete="on"
           placeholder="First Name">
    <input id="last-name"
           class="form-control"
           :value="newUser.lastName"
           @blur="getUser"
           autocomplete="on"
           placeholder="Last Name">
    <input id="email-address"
           class="form-control"
           :value="newUser.emailAddress"
           @blur="getUser"
           autocomplete="email"
           placeholder="Email">
    <input id="date-of-birth"
           class="form-control"
           :value="newUser.dateOfBirth"
           maxlength="10"
           @blur="getUser"
           @keyup="updateBirthdate"
           autocomplete="off"
           placeholder="Date of Birth (DD/MM/YYYY)">
    <input id="password"
           type="password"
           class="form-control"
           :value="newUser.password"
           @blur="getUser"
           autocomplete="off"
           placeholder="Password">
    <div class="form-check">
      <input id="showPassword" class="form-check-input" type="checkbox" @click="toggleShowPassword">
      <label class="form-check-label" for="showPassword">
        Show Password
      </label>
    </div>
    <button id="add-user-button" type="button" class="btn btn-primary" @click="addUser" disabled>
      <b-icon icon="person-plus" />&nbsp;Add User
    </button>
  </div>
</template>

<script lang="ts">
  
  import { Component, Vue } from 'vue-property-decorator';
  import { uuid } from 'vue-uuid';

  @Component
  export default class UserForm extends Vue {
    
    // Click handler for checkbox to show or hide password by changing input type
    public toggleShowPassword() : void {
      const passwordInput = document.getElementById("password") as HTMLInputElement;
      passwordInput.type === "password" ?
        passwordInput.type = "text" :
        passwordInput.type = "password";
    }
    
    // Change handler for date-of-birth input to format input as DD/MM/YYYY
    public updateBirthdate() : void {
      let dateOfBirth:string = (document.getElementById('date-of-birth') as HTMLInputElement).value.replace(/[^\d/]|^[/]*$/g, '')
      
      if (dateOfBirth.length === 2 || dateOfBirth.length === 5) {
        (document.getElementById('date-of-birth') as HTMLInputElement).value = dateOfBirth + '/'
      }
    }
    
    public getUser() : void {
      const user : {
        userId : string,
        firstName : string,
        lastName : string,
        emailAddress : string,
        dateOfBirth : string,
        password : string
      } = {
      
        // If user is being edited, userID field should be set to prevent new id being generated
        userId: (document.getElementById('user-id') as HTMLInputElement).value === '' ?
                uuid.v1() :
                (document.getElementById('user-id') as HTMLInputElement).value,
        firstName: (document.getElementById('first-name') as HTMLInputElement).value,
        lastName: (document.getElementById('last-name') as HTMLInputElement).value,
        emailAddress: (document.getElementById('email-address') as HTMLInputElement).value,
        dateOfBirth: (document.getElementById('date-of-birth') as HTMLInputElement).value,
        password: (document.getElementById('password') as HTMLInputElement).value
      }

      // For validation, just check that an ownership has all the required properties before submitting to store
      if(user.userId === '' ||
         user.firstName === '' ||
         user.lastName === '' ||
         user.emailAddress === '' ||
         user.dateOfBirth === '' ||
         user.password === '')
      {
        (document.getElementById('add-user-button') as HTMLInputElement).disabled = true
      } else {
        (document.getElementById('add-user-button') as HTMLInputElement).disabled = false
      }
  
      this.$store.dispatch('getUser', user)
    }
  
    public addUser() : void {
      
      // Disable button to prevent user from trying to add an empty user
      (document.getElementById('add-user-button') as HTMLInputElement).disabled = true
      this.$store.dispatch('addUser')
      this.$store.dispatch('clearUser')
    }
    
    get newUser() : void {
      return this.$store.getters.newUser
    }

  }
    
</script>
