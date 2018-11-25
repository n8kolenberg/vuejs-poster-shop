import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    cartItems: [],
    calcTotal() {
      var number = 0;
      //For each item in the cart, we multiply quantity by price and add it to variable number
      this.cartItems.forEach((val, index, arr)=>{
        number += (val.quantity * val.price);
      });
      //Then at the end, we set total to number. 
      //When function runs again, number will be made zero
      this.total = number;
      number = undefined; //To clean
    }
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
        state.cartItems.push({ id: payload.id, name: payload.name, price: payload.price, quantity: payload.quantity });
      }
      //Calculate the total amount
      state.calcTotal();
      
    },
    
    decreaseTotal(state, payload) {
      //Iterate through all the cartItems in the store
      state.cartItems.forEach((val, index, array)=>{
        //If we find the item and there's more than 1..
        if(val.id == payload.id && val.quantity > 1) {
          //..deduct from it
          val.quantity--;
          //If found and there's just 1 left, we need to remove it from the store cartItems
        } else if(val.id == payload.id && val.quantity == 1) {
          array.splice(index, 1);
        } 
        
      });
      //Calculate the total amount
      state.calcTotal();
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
