<template>
  <div>
    <h1 class="header">{{ msg }}</h1>
      <Poster/> 
  </div>
</template>

<script>
import Poster from '@/components/Poster.vue'


export default {
  name: 'Posters',
  props: {
    msg: String
  },
  components: {
    Poster
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
