<template lang="pug">
  v-container(fluid, v-resize="onResize")
    v-layout(row,wrap)
      v-flex.xs12
        v-text-field(label="Match",
              value="",
              prefix="#",
              type="number",
              v-model="matchNumber",
              ref="matchNumber", 
              :rules="[() => !!matchNumber || 'This field is required']",
              required)
      v-flex.xs12
        v-text-field(label="Team Number",
              value="",
              prefix="#",
              type="text",
              v-model="teamID",
              ref="teamID", 
              :rules="[() => !!teamID || 'This field is required']",
              required)
      v-flex.xs12
        v-dp
    
</template>

<script>
export default {
  name: 'NewMatch',
  data () {
    return {
      matchNumber: null,
      teamID: null
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
