import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Register from '@/view/register'
import FindPWD from '@/view/findPWD'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/findPWD',
      name: 'FindPWD',
      component: FindPWD
    }
  ]
})
