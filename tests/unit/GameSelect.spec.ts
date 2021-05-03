import Vue from 'vue'
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import GameSelect from '@/components/forms/GameSelect.vue'

Vue.config.ignoredElements = ['b-icon']

describe('GameSelect', () => {
  
  let localVue : any;
  let store: any;
  let actions : any;

  beforeEach(() => {
    
    localVue = createLocalVue();
    localVue.use(Vuex);

    // Create Mock Store
    store = new Vuex.Store({
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
  
  
  test('Mounting component with data and props', () => {
    
    const wrapper = shallowMount(GameSelect, { localVue, store, propsData: {userId: 'test'} });
    
  })
  

})
             
