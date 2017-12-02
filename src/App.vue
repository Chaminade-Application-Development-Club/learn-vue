<template lang="pug">
v-app
  v-navigation-drawer(fixed,v-model='drawer',light,app)
    .pa-3.text-xs-center(v-show="!mini")
      div.display-2.py-4 Learn
      v-list-tile-avatar
        img(src = "https://randomuser.me/api/portraits/men/85.jpg")
  v-toolbar(fixed,dark,app,color="blue",:class="theme")
    v-toolbar-side-icon(dark, @click.native.stop='drawer = !drawer')
    v-toolbar-title {{title}}
  v-content
    v-container(fluid)
      v-slide-y-transition(mode='out-in')
        router-view
  v-fab-transition
    v-btn(
      fab
      dark
      fixed
      bottom
      right
      color="red"
    )
      v-icon keyboard_arrow_up
  v-footer(app)
    p.text-lg-center Made with ❤ by Leo Hu @2017
</template>

<script>
  export default {
    data () {
      return {
        title: 'Learning',
        dark: false,
        theme: 'primary',
        mini: false,
        drawer: false
      }
    }
  }
</script>

