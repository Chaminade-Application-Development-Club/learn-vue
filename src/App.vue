<template lang="pug">
v-app
  v-navigation-drawer(fixed,v-model='drawer',light,app)
    .pa-3.text-xs-center(v-show="!mini")
      div.display-2.py-4 Scout
      v-avatar(size="100px")
        img(src = "/static/best.jpg")
  v-toolbar(fixed,dark,app,color="blue",:class="theme")
    v-toolbar-side-icon(dark, @click.native.stop='drawer = !drawer')
    v-toolbar-title {{title}}

  v-content
    v-container(fluid)
      v-slide-y-transition(mode='out-in')
        v-stepper(v-model="step", horizontal)
          v-stepper-header
            v-stepper-step(step="1", v-bind:complete="step > 1") New Match
            v-divider
            v-stepper-step(step="2", v-bind:complete="step > 2") Auton
            v-divider
            v-stepper-step(step="3", v-bind:complete="step > 3") Teleop
            v-divider
            v-stepper-step(step="4", v-bind:complete="step > 4") Final

          v-stepper-items
            v-stepper-content(step="1")
              router-view
              v-btn(color="primary", @click.native="moveTo(2,'auton')") Next
            v-stepper-content(step="2")
              router-view
              v-btn(color="primary", @click.native="moveTo(3,'teleop')") Next
              v-btn(flat, @click.native="moveTo(1,'newmatch')") Back
            v-stepper-content(step="3")
              router-view
              v-btn(color="primary", @click.native="moveTo(4,'final')") Next
              v-btn(flat, @click.native="moveTo(2,'auton')") Back
            v-stepper-content(step="4")
              router-view
              v-btn(color="primary") Finish
              v-btn(flat, @click.native="moveTo(3,'teleop')") Back
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
    v-container.pa-0(fluid)
      v-layout(row,wrap)
          v-flex.xs12
            p.text-xs-center Made with ❤ by Leo Hu @2017
</template>

<script>
  export default {
    data () {
      return {
        title: 'Eagles',
        dark: false,
        theme: 'primary',
        mini: false,
        drawer: false,
        step: 1
      }
    },
    created () {
      this.$router.push('newmatch')
    },
    methods: {
      moveTo: function (step, address) {
        this.$router.push(address)
        this.step = step
      }
    }
  }
</script>

