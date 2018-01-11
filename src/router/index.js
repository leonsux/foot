import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import AppBrowse from '@/components/browse/AppBrowse'
import AppStory from '@/components/story/AppStory'
import AppFavorite from '@/components/favorite/AppFavorite'
import AppMessage from '@/components/message/AppMessage'
import AppMine from '@/components/mine/AppMine'

import AppMineLogin from '@/components/mine/login/AppMineLogin'
import AppMineRegister from '@/components/mine/register/AppMineRegister'
import AppMinePersonal from '@/components/mine/personal/AppMinePersonal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppBrowse',
      component: AppBrowse
    },
    {
      path: '/appstory',
      name: 'AppStory',
      component: AppStory
    },
    {
      path: '/favorite',
      name: 'AppFavorite',
      component: AppFavorite
    },
    {
      path: '/message',
      name: 'AppMessage',
      component: AppMessage
    },
    {
      path: '/mine',
      name: 'AppMine',
      component: AppMine,
      children: [
        {
          path: '',
          redirect: '/login',
          component: AppMineLogin
        },
        {
          path: '/login',
          name: 'AppMineLogin',
          component: AppMineLogin
        },
        {
          path: '/register',
          name: 'AppMineRegister',
          component: AppMineRegister
        },
        {
          path: '/personal',
          name: 'AppMinePersonal',
          component: AppMinePersonal
        }
      ]
    }
  ]
})
