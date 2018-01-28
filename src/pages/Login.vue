<template lang="pug">
  v-container(fluid, v-resize="onResize")
    v-layout(row,wrap)
      v-flex.xs12
        v-text-field(label="Enter Your Email"
              v-model = "email"
              type="email"
              class="input-group--focused"
              prepend-icon = "email")
    v-layout(row,wrap)
      v-flex.xs12
        v-text-field(label="Enter Your Password"
              v-model = "password"
              type="password"
              class="input-group--focused"
              prepend-icon = "lock"
              :append-icon="hide ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (hide = !hide)"
              :type="hide ? 'password' : 'text'")
    v-layout(row,wrap)
      v-flex.xs6
        v-btn(color="warning", @click.native="signup") Signup
      v-flex.xs6.text-xs-right
        v-btn(color="primary", @click.native="login") Login              
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      hide: true
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    onResize () {
    },
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.push('scout')
        },
        (err) => {
          alert(err.message)
        }
      )
    },
    signup: function () {
      this.$router.push('signup')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
