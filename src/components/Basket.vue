<template>
    <div class="cart">
        <h2>Shopping Cart</h2>
        <ul>
            <li class="cart-item" v-for="item in cart">
                <div class="item-title"> {{ item.name }}</div>
                <span class="item-qty">${{item.price.toFixed(2)}} x {{ item.quantity }} </span>
                <button class="btn" @click="remove(item)">-</button>
                <button class="btn"@click="addToCart(item)">+</button>
            </li>
        </ul>
        <div v-if="cart.length">
            <div>Total: {{getTotal | currency}}</div>
        </div>
        <div v-else>No items in the cart</div>
        

    </div>
</template>


<script>
export default {
    data() {
        return {
            //Basic cart to start with 
            cart: this.$store.getters.getCartItems
        }
    },
    computed: {
        //Getting the total cart amount from the store
        getTotal() {
            this.cart = this.$store.getters.getCartItems;
            // console.log(this.cart);
            return this.$store.getters.getTotal;
        }
    },
    methods: {
        remove(payload) {
            this.$store.dispatch('decreaseTotal', payload);
        },

        addToCart(payload) {
            this.$store.dispatch('increaseTotal', payload);
        }

    }
}
</script>

<style scoped>
.cart {
    margin-top: 4rem;
    margin-left: 6rem;
}

</style>
