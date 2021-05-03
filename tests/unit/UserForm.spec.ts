import Vue from 'vue'
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import UserForm from '@/components/forms/UserForm.vue'

Vue.config.ignoredElements = ['b-icon']

describe('UserForm', () => {
  
  let localVue : any;
  let store: any;
  let actions : any;

  beforeEach(() => {
    
    localVue = createLocalVue();
    localVue.use(Vuex);

    // Create Mock Store
    store = new Vuex.Store({
      state: {
        newUser: {
          userId: 'test',
          firstName: 'test',
          lastName: 'test',
          emailAddress: 'test',
          dateOfBirth: 'test',
          password: 'test'
        },
      },
      getters: {
        newUser: state => state.newUser
      }
    })
  })
  
  test('Mounting component with data', () => {
    
    const wrapper = shallowMount(UserForm, { localVue, store });
    
  })
  

})
             
