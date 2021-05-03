import Vue from 'vue'
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import GameForm from '@/components/forms/GameForm.vue'

Vue.config.ignoredElements = ['b-icon']

describe('GameForm', () => {
  
  let localVue : any;
  let store: any;

  beforeEach(() => {
    
    localVue = createLocalVue();
    localVue.use(Vuex);

    // Create Mock Store
    store = new Vuex.Store({
      state: {
        newGame: {
          gameId: '',
          name: '',
          ageRestriction: '',
          thumbnail: ''
        }
      },
      getters: {
        newGame: state => state.newGame
      }
    })
  })
  
  
  test('Mounting component with data', () => {
    
    const wrapper = shallowMount(GameForm, { localVue, store });
    
  })
  

})
             
