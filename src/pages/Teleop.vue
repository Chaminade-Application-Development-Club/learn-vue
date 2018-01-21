<template lang="pug">
  v-container(fluid, v-resize="onResize")
    v-layout(row,wrap)
      v-flex.xs6
        v-pm(title="Switch")
      v-flex.xs6
        v-pm(title="Scale")
      
    v-layout(row,wrap)
      v-flex.xs6
        v-pm(title="Exchange")
      v-flex.xs6
        v-select(v-bind:items="items",
              v-model="climbState"
              label="Climb"
              single-line,
              hint="Climb !????")
    
    v-layout(row,wrap)
      v-flex.xs6
        v-pm(title="Cubes in Boost")
      v-flex.xs6
        v-pm(title="Focus")
    
    v-layout(row,wrap)
      v-flex.xs6
        v-pm(title="Force")
      v-flex.xs6
        v-pm(title="Levitate")
</template>

<script>
export default {
  name: 'Teleop',
  data () {
    return {
      climbState: null,
      items: [
        { text: 'Yes' },
        { text: 'No' },
        { text: '+1' },
        { text: '+2' }
      ]
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
