<template>
    <div class="products">
        <div class="iterable" v-for="item in amount">
            <div>
                <h4 class="product-title">Product 1</h4>
                <small>{{price}}</small>
            </div>
            <button class="btn btn-medium btn-info add-to-cart" @click="AddToCart({by: price})">Add to Cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                price: 20,
                amount: 5
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
 .iterable {
     padding-bottom: 1rem;
     margin-bottom: 1rem;
     border: 1px solid lightgray;
 }
</style>
