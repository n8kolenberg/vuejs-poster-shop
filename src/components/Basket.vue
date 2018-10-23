<template>
    <div class="cart">
        <h2>Shopping Cart</h2>
        <ul>
            <li class="cart-item" v-for="item in cart">
                <div class="item-title">{{ item.title }}</div>
                <span class="item-qty">{{ item.quantity }}</span>
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
            cart: []
        }
    },
    computed: {
        getTotal() {
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
