<template>
  <div class="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Posters msg="VueJS Poster Store"/>
    <Basket/>

  </div>
</template>

<script>
// @ is an alias to /src
import Posters from '@/components/Posters.vue'
import Basket from '@/components/Basket.vue'

export default {
  name: 'home',
  components: {
    Posters,
    Basket
  }
}
</script>
