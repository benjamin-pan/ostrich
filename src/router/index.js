import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/view/register'
import FindPWD from '@/view/findPWD'
import Detail from '@/view/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/view/login')
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
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('@/view/my'),
      children: [
        {
          path: 'pcenter',
          alias: '/my',
          component: () => import('@/view/my/pcenter')
        },
        {
          path: 'jifen',
          component: () => import('@/view/my/jifen')
        }
      ]
    }
  ]
})
