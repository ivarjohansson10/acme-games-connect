import Vue from 'vue'
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Games from '@/components/Games.vue'

Vue.config.ignoredElements = ['b-icon']

describe('Games', () => {
  
  let localVue : any;
  let store: any;
  
  let actionsDispatched = {
    editGame: false,
    removeGame: false
  };

  beforeEach(() => {
    
    localVue = createLocalVue();
    localVue.use(Vuex);

    // Create Mock Store
    store = new Vuex.Store({
      actions: {
        editGame() {
          actionsDispatched.editGame = true;
        },
        removeGame() {
          actionsDispatched.removeGame = true;
        },
      },
      getters: {
        getGames() {
          return [
            {
              body: {
                gameId: 'test', name: 'test', ageRestriction: 'test', thumbnail: 'test'
              } 
            }
          ];
        }
      }
    })
  })
  
  test('Mounting component with data', () => {
  
    const wrapper = shallowMount(Games, { localVue, store });
    
  })
  
  test('When user clicks on edit button editGame action should be dispatched', () => {
    
    const wrapper = shallowMount(Games, { localVue, store });
    wrapper.find('.edit-game').trigger('click')  
    
    expect(actionsDispatched.editGame).toBe(true)
    
  })
  
  test('When user clicks on remove button removeGame action should be dispatched', () => {
    
    const wrapper = shallowMount(Games, { localVue, store });
    wrapper.find('.remove-game').trigger('click')  
    
    expect(actionsDispatched.removeGame).toBe(true)
    
  })

})
             
