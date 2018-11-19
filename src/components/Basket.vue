<template>
    <div class="cart">
        <h2>Shopping Cart</h2>
        <ul>
            <li class="cart-item" v-for="item in cart">
                <div class="item-title">Name {{ item.name }}</div>
                <span class="item-qty">Quantity {{ item.quantity }}</span>
                <span class="item-price">Price {{ item.price }}</span>

            </li>
        </ul>
        <div v-if="cart.length">
            <div>Total: {{getTotal}}</div>
        </div>
        <div v-else>No items in the cart</div>
        

    </div>
</template>


<script>
export default {
    data() {
        return {
            cart: [{name: "", quantity: 0, price: 0}]
        }
    },
    computed: {
        getTotal() {
            this.cart = this.$store.getters.getCartItems;
            // console.log(this.cart);
            return this.$store.getters.getTotal;
        }
    },
    methods: {
        updateCart() {

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
