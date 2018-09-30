import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0
  },
  getters: {
    getTotal(state) {
      return state.total;
    }
  },
  mutations: {
    increaseTotal(state, payload) {
      console.log('incrementing total through mutation in store');
      state.total += payload;
    },
    decreaseTotal(state, payload) {
      state.total -= payload;
    },

  },
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
