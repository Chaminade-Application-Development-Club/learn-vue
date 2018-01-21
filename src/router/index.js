import Vue from 'vue'
import Router from 'vue-router'

import Auton from '@/pages/Auton'
import Teleop from '@/pages/Teleop'
import NewMatch from '@/pages/NewMatch'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newmatch',
      name: 'NewMatch',
      component: NewMatch
    },
    {
      path: '/auton',
      name: 'Auton',
      component: Auton
    },
    {
      path: '/teleop',
      name: 'Teleop',
      component: Teleop
    }
  ]
})
