<template lang="pug">
v-app
  v-navigation-drawer(fixed,v-model='drawer',light,app)
    v-list.pa-0
      .pa-3.text-xs-center(v-show="!mini")
        p {{name}}
    v-list.text-xs-center.pt-0(dense)
      v-divider
      v-btn(round color="red" dark, @click.native = "signout") Log Out
      
  v-toolbar(fixed,dark,app,color="blue",:class="theme")
    v-toolbar-side-icon(dark, @click.native.stop='drawer = !drawer')
    v-toolbar-title {{title}}

  v-content
    v-container(fluid)
      v-layout(align-center,justify-center)
        v-flex.xs12.sm10.md8.lg6.xl4
          v-slide-y-transition(mode='out-in')
            router-view

  v-footer(app)
    v-container.pa-0(fluid)
      v-layout(row,wrap)
          v-flex.xs12
            p.text-xs-center Made with ❤ by Leo Hu @2017
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      title: 'Eagles',
      dark: false,
      theme: 'primary',
      mini: false,
      drawer: false,
      userName: ''
    }
  },
  created () {
      // this.$router.push('newmatch')
  },
  methods: {
    signout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('login')
      })
    }
  },
  computed: {
    name: function () {
      if (firebase.auth().currentUser) {
        return firebase.auth().currentUser.email
      } else {
        return 'Please Log in'
      }
    }
  }
}
</script>

