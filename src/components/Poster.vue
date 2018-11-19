<template>
    <div class="products">
        <div class="iterable" v-for="(item, key) in amount">
            <div>
                <h4 class="product-title">Product {{productName + key}}</h4>
                <small>{{price}}</small>
            </div>
            <button class="btn btn-medium btn-info add-to-cart" @click="AddToCart({name: `Product ${productName+key}`, by: price, quantity: 1})">Add to Cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                productName: 1,
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
