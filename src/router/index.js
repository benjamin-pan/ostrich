import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/view/register'
import FindPWD from '@/view/findPWD'
import Detail from '@/view/detail'
import Viewpoint from '@/view/headline/headlineViewpoint'
import Situation from '@/view/headline/headlineSituation'
import Details from '@/view/headline/headlineDetails'
import Andustry from '@/view/headline/headlineAndustry'
import Encyclopedia from '@/view/headline/headlineEncyclopedia'
import Flash from '@/view/flash/flash'
import Flashdetails from '@/view/flash/flashDetails'
import Home from '@/view/home'
import Activity from '@/view/activity/index'
import ActivityDetail from '@/view/activity/detail'
// import index from '@/components/index'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/view/login')
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/activity/detail',
      name: 'ActivityDetail',
      component: ActivityDetail
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
        },
        {
          path: 'guanzhu',
          component: () => import('@/view/my/guanzhu')
        },
        {
          path: 'activity',
          component: () => import('@/view/my/activity')
        },
        {
          path: 'shoucang',
          component: () => import('@/view/my/shoucang')
        },
        {
          path: 'newsCenter',
          component: () => import('@/view/my/newsCenter')
        }
      ]
    },
    {
      path: '/headline/headlineViewpoint',
      name: 'Viewpoint',
      component: Viewpoint
    },
    {
      path: '/headline/headlineSituation',
      name: 'Situation',
      component: Situation
    },
    {
      path: '/headline/headlineDetails',
      name: 'Details',
      component: Details
    },
    {
      path: '/headline/headlineAndustry',
      name: 'Andustry',
      component: Andustry
    },
    {
      path: '/headline/headlineEncyclopedia',
      name: 'Encyclopedia',
      component: Encyclopedia
    },
    {
      path: '/flash/flash',
      name: 'Flash',
      component: Flash
    },
    {
      path: '/flash/flashDetails',
      name: 'Flashdetails',
      component: Flashdetails
    },
  ]
})
