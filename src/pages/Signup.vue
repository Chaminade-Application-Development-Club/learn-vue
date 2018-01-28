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
        v-btn(color="normal", @click.native="cancel") cancel
      v-flex.xs6.text-xs-right
        v-btn(color="primary", @click.native="signup") signup              
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Signup',
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
    cancel: function () {
      this.$router.push('login')
    },
    signup: function () {
      console.log(this.email)
      console.log(this.password)
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.push('scout')
        },
        (err) => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
