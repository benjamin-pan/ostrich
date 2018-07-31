import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Register from '@/view/register'
import FindPWD from '@/view/findPWD'
import Detail from '@/view/detail'
import Viewpoint from '@/view/headlineViewpoint'
import Situation from '@/view/headlineSituation'
import Details from '@/view/headlineDetails'
import Andustry from '@/view/headlineAndustry'
import Encyclopedia from '@/view/headlineEncyclopedia'

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
    ,
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
    ,
    {
      path: '/headlineViewpoint',
      name: 'Viewpoint',
      component: Viewpoint
    }
    ,
    {
      path: '/headlineSituation',
      name: 'Situation',
      component: Situation
    }
    ,
    {
      path: '/headlineDetails',
      name: 'Details',
      component: Details
    }
    ,
    {
      path: '/headlineAndustry',
      name: 'Andustry',
      component: Andustry
    }
    ,
    {
      path: '/headlineEncyclopedia',
      name: 'Encyclopedia',
      component: Encyclopedia
    }
  ]
})
