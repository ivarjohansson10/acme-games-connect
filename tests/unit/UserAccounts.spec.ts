import Vue from 'vue'
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import UserAccounts from '@/components/UserAccounts.vue'

Vue.config.ignoredElements = ['b-icon']

describe('UserAccounts', () => {
  
  let localVue : any;
  let store: any;
  
  let actionsDispatched = {
    editUser: false,
    removeUser: false
  };

  beforeEach(() => {
    
    localVue = createLocalVue();
    localVue.use(Vuex);

    // Create Mock Store
    store = new Vuex.Store({
      actions: {
        editUser() {
          actionsDispatched.editUser = true;
        },
        removeUser() {
          actionsDispatched.removeUser = true;
        },
      },
      getters: {
        getUsers() {
          return [
            {
              body: {
                userId: 'test', firstName: 'test', lastName: 'test', emailAddress: 'test', dateOfBirth: 'test' 
              } 
            }
          ];
        }
      }
    })
  })
  
  test('Mounting component with data', () => {
    
    const wrapper = shallowMount(UserAccounts, { localVue, store });
    
  })
  
  
  test('When user clicks on edit button editUser action should be dispatched', () => {
    
    const wrapper = shallowMount(UserAccounts, { localVue, store });
    wrapper.find('.edit-user').trigger('click')  
    
    expect(actionsDispatched.editUser).toBe(true)
    
  })
  
  test('When user clicks on remove button removeUser action should be dispatched', () => {
    
    const wrapper = shallowMount(UserAccounts, { localVue, store });
    wrapper.find('.remove-user').trigger('click')  
    
    expect(actionsDispatched.removeUser).toBe(true)
    
  })

})
             
