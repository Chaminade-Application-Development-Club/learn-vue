<template lang="pug">
  v-container(fluid)
    v-card
      v-card-text {{msg}}


</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
