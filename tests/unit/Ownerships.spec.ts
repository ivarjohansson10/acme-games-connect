import Vue from 'vue'
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Ownerships from '@/components/Ownerships.vue'

Vue.config.ignoredElements = ['b-icon']

describe('Ownerships', () => {
  
  let localVue : any;
  let store: any;
  
  let actionsDispatched = {
    changeOwnership: false,
    removeOwnership: false
  };

  beforeEach(() => {
    
    localVue = createLocalVue();
    localVue.use(Vuex);

    // Create Mock Store
    store = new Vuex.Store({
      actions: {
        changeOwnership() {
          actionsDispatched.changeOwnership = true;
        },
        removeOwnership() {
          actionsDispatched.removeOwnership = true;
        },
      },
      getters: {
        getOwnerships() {
          return [
            {
              body: {
                ownershipId: 'test', userAccountId: 'test', ownedGameId: 'test', ownershipState: 'test', registrationDate: 'test' 
              } 
            }
          ];
        }
      }
    })
  })
  
  test('Mounting component with data', () => {
    
    const wrapper = shallowMount(Ownerships, { localVue, store });
    
  })
  
  test('When user clicks on remove button removeOwnership action should be dispatched', () => {
    
    const wrapper = shallowMount(Ownerships, { localVue, store });
    wrapper.find('.remove-ownership').trigger('click')  
    
    expect(actionsDispatched.removeOwnership).toBe(true)
    
  })
  
  test('When user clicks on toggle button changeOwnership action should be dispatched', () => {
    
    const wrapper = shallowMount(Ownerships, { localVue, store });
    wrapper.find('.toggle-ownership').trigger('click')  
    
    expect(actionsDispatched.changeOwnership).toBe(true)
    
  })

})
             
