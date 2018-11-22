<template>
    <div class="products">
        <div class="iterable" v-for="(item, key) in amount">
            <div>
                <h4 class="product-title">Product {{id + key}}</h4>
                <small>{{price * key | currency}}</small>
            </div>
            <button class="btn btn-medium btn-info add-to-cart" @click="AddToCart({id: `${id+key}`, price: price*key, quantity: 1})">Add to Cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 1,
                price: 20,
                amount: 5
            }
        },
        methods: {
            AddToCart(payload) {
                //Increasing the total in the store
                this.$store.dispatch('increaseTotal', payload);
                // console.log(`Total is now ${this.$store.state.total}`);
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
