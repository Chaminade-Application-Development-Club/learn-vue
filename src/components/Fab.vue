<template lang="pug">
  v-speed-dial(v-model="fab",
    :bottom="true",
    :right="true",
    :left="false",
    :direction="top",
    :transition="slide-y-reverse-transition")
    v-btn(slot="activator"
        color="blue darken-2"
        dark
        fab
        hover
        v-model="fab")
</template>

<script>
export default {
  name: 'Fab',
  data () {
    return {
      fab: 'false'
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
  computed: {
  }
}
</script>