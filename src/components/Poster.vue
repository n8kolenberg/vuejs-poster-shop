<template>
    <div class="products">
         <form action="#">
      <input type="text" name="Search" id="search-bar" class="" v-model="userSearch" @input="filterProducts">
    </form>
        <div class="iterable" v-for="(item, key) in filterProducts">
            <div>
                <h4 class="product-title">{{item.name}}</h4>
                <small>{{item.price | currency}}</small>
            </div>
            <button class="btn btn-medium btn-info add-to-cart" @click="AddToCart({id: item.id, name: item.name, price: item.price, quantity: 1})">Add to Cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posters: [
                    {
                    id: 1,
                    name: "T-shirt",
                    price: 20
                    },
                    {
                    id: 2,
                    name: "Red pants",
                    price: 40
                    },
                    {
                    id: 3,
                    name: "Skirt",
                    price: 50
                    },
                    {
                    id: 4,
                    name: "Jacket",
                    price: 60
                    },
                    {
                    id: 5,
                    name: "Timberland shoes",
                    price: 70
                    }
                ],
                userSearch: ""
            }
        },
        methods: {
            AddToCart(payload) {
                //Increasing the total in the store
                this.$store.dispatch('increaseTotal', payload);
                // console.log(`Total is now ${this.$store.state.total}`);
            }
        },
        computed: {
            filterProducts() {
                return this.posters.filter((poster)=>{
                   return poster.name.toLowerCase().match(this.userSearch.toLowerCase())
                })
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
