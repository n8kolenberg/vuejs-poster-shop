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
    },
    getCartItems(state) {
      return state.cartItems;
    }
  },
  //These will in the end do the updating of the stored data in the store's state data
  mutations: {
    increaseTotal(state, payload) {
      //Creating a found flag
      var found = false;
      //Iterate through all the cartItems in the store
      state.cartItems.forEach((val, index) => {
        //If the item we want to add is already in the cartItems
        if(val.id == payload.id) {
          //change the flag to true and just increase the quantity of that particular cartItem
          found = true;
          val.quantity++
        }
      });
      //If it's not found through the iteration above, just push it to the cartItems
      if(!found) {
        state.cartItems.push({ id: payload.id, price: payload.price, quantity: payload.quantity });
      }
      //Increase the overall cart total
      state.total += payload.price;
      console.log(`Total: ${state.total}`);
    },
    
    decreaseTotal(state, payload) {
      //Iterate through all the cartItems in the store
      state.cartItems.forEach((val, index, array)=>{
        if(val.id == payload.id && val.quantity > 1) {
          val.quantity--;
        } else if(val.id == payload.id && val.quantity == 1) {
          array.splice(index-1, 1);
        } 
        
      });
      //state.total = the quantity of all the cartItems times their individual prices
    }

  },
  //Asynchronous actions that will call the mutations to update the state of the store
  actions: {
    increaseTotal({commit}, payload) {
      commit('increaseTotal', payload);
    },
    decreaseTotal({commit}, payload) {
      commit('decreaseTotal', payload);
    }
  }
})
