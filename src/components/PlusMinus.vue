<template lang="pug">
  v-container.pa-0(fluid)
    v-layout(row,wrap)
        v-flex.xs12.pl-3
            p {{name}}
        v-flex.xs4.text-xs-center
            v-btn(icon,flat,color="red", @click.native="number--")
                v-icon remove
        v-flex.xs4.text-xs-center
            p.pt-3 {{number}}
        v-flex.xs4.text-xs-center
            v-btn(icon,flat,color="indigo",@click.native="number++")
                v-icon add
        

</template>

<script>
export default {
  name: 'PlusMinus',
  data () {
    return {
      name: this.title,
      number: 0
    }
  },
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
