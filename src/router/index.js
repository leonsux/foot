import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 浏览
import AppBrowse from '@/components/browse/AppBrowse'
// filters
// import AppArea from '@components/browse/AppArea'

// 故事
import AppStory from '@/components/story/AppStory'
// 故事详情
import AppStoryDetail from '@/components/story/AppStoryDetail'
// 写故事
import AppWriting from '@/components/story/AppWriting'
// 搜索
import AppStorySearch from '@/components/story/AppStorySearch'

import AppFavorite from '@/components/favorite/AppFavorite'
import AppMessage from '@/components/message/AppMessage'
// 我的
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
      path: '/appstorydetail',
      name: 'AppStoryDetail',
      component: AppStoryDetail
    },
    {
      path: '/appwriting',
      name: 'AppWriting',
      component: AppWriting
    },
    {
      path: '/appstorysearch',
      name: 'AppStorySearch',
      component: AppStorySearch
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
      redirect: '/login',
      component: AppMine,
      children: [
        {
          path: '',
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
