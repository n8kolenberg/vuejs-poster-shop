<template>
    <div class="products">
        <div>
            <p>Product 1</p>
            <small>{{price}}</small>
        </div>
        <button class="btn btn-medium btn-info" @click="AddToCart({by: price})">Add to Cart</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                price: 20,
                amount: 0
            }
        },
        methods: {
            AddToCart(payload) {
                this.$store.dispatch('increaseTotal', payload);
                console.log(`Total is now ${this.$store.state.total}`);
            }
        }
    }
</script>

<style scoped>

</style>
