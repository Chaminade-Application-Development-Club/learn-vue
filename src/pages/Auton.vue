<template lang="pug">
  v-container(fluid, v-resize="onResize")
    v-layout(row,wrap)
      v-flex.xs6
        v-pm(title="Switch")
      v-flex.xs6
        v-pm(title="Cross Line")
      
    v-layout(row,wrap)
      v-flex.xs6
        v-pm(title="Scale")
      v-flex.xs6
        v-pm(title="Exchange")
</template>

<script>
export default {
  name: 'Auton',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    onResize () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
