import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    cartItems: []
  },
  //Get the total to show in the basket
  getters: {
    getTotal(state) {
      return state.total;
    }
  },
  //These will in the end do the updating of the stored data in the store's state data
  mutations: {
    increaseTotal(state, payload) {
      console.log('incrementing total through mutation in store');
      state.total += payload;
    },
    decreaseTotal(state, payload) {
      state.total -= payload;
    },

  },
  //Asynchronous actions that will call the mutations to update the state of the store
  actions: {
    increaseTotal({commit}, payload) {
      console.log('increaseTotal action in store is now called');
      commit('increaseTotal', payload.by);
    },
    decreaseTotal({commit}, payload) {
      commit('decreaseTotal', payload.by);
    }
  }
})
