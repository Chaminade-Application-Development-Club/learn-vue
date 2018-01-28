<template lang="pug">
v-container(fluid, v-resize="onResize")
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
        v-newmatch
        v-btn(color="primary", @click.native="moveTo(2,'auton')") Next              
      v-stepper-content(step="2")
        v-auton
        v-btn(color="primary", @click.native="moveTo(3,'teleop')") Next
        v-btn(flat, @click.native="moveTo(1,'newmatch')") Back
      v-stepper-content(step="3")
        v-teleop
        v-btn(color="primary", @click.native="moveTo(4,'final')") Next
        v-btn(flat, @click.native="moveTo(2,'auton')") Back
      v-stepper-content(step="4")
          v-btn(color="primary") Finish
          v-btn(flat, @click.native="moveTo(3,'teleop')") Back
</template>

<script>
  export default {
    data () {
      return {
        step: 1
      }
    },
    methods: {
      onResize () {
      },
      moveTo: function (step, address) {
        this.$router.push(address)
        this.step = step
      }
    }
  }
</script>