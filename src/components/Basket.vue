<template>
    <div class="cart">
    <h2>Shopping Cart</h2>
    <div>
        <div>Total: {{getTotal}}</div>
    </div>
        

    </div>
</template>


<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        getTotal() {
            return this.$store.getters.getTotal;
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
