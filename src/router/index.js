import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 浏览
import AppBrowse from '@/components/browse/AppBrowse'
// 体验列表
import AppExperiences from '@/components/browse/AppExperiences'
// 体验详情
import AppExDetail from '@/components/browse/AppExDetail'
// 民宿类型详情
import AppTyDetail from '@/components/browse/AppTyDetail'
// 筛选日期
import AppFilteTime from '@/components/browse/AppFilteTime'
// 筛选人
import AppFiltePerson from '@/components/browse/AppFiltePerson'
// 搜索
import AppFilteSearch from '@/components/browse/AppFilteSearch'

// 故事
import AppStory from '@/components/story/AppStory'
// 故事详情
import AppStoryDetail from '@/components/story/AppStoryDetail'
// 写故事
import AppWriting from '@/components/story/AppWriting'
// 搜索
import AppStorySearch from '@/components/story/AppStorySearch'

// 收藏
import AppFavorite from '@/components/favorite/AppFavorite'
// 收藏详情
import AppFavDetail from '@/components/favorite/AppFavDetail'

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
      component: AppBrowse,
      meta: { keepAlive: true }
    },
    {
      path: '/Appexperiences',
      name: 'AppExperiences',
      component: AppExperiences
    },
    {
      path: '/AppExDetail',
      name: 'AppExDetail',
      component: AppExDetail
    },
    {
      path: '/AppTyDetail',
      name: 'AppTyDetail',
      component: AppTyDetail
    },
    {
      path: '/AppFilteTime',
      name: 'AppFilteTime',
      component: AppFilteTime
    },
    {
      path: '/AppFiltePerson',
      name: 'AppFiltePerson',
      component: AppFiltePerson
    },
    {
      path: '/AppFilteSearch',
      name: 'AppFilteSearch',
      component: AppFilteSearch
    },
    {
      path: '/appstory',
      name: 'AppStory',
      component: AppStory,
      meta: { keepAlive: true }
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
      component: AppFavorite,
      meta: { keepAlive: true }
    },
    {
      path: '/AppFavDetail',
      name: 'AppFavDetail',
      component: AppFavDetail
    },
    {
      path: '/message',
      name: 'AppMessage',
      component: AppMessage,
      meta: { keepAlive: true }
    },
    {
      path: '/mine',
      name: 'AppMine',
      redirect: '/login',
      component: AppMine,
      meta: { keepAlive: true },
      children: [
        {
          path: '',
          redirect: to => {
            if (!localStorage.userMsg) {
              return {name: 'AppMinelogin'}
            } else {
              this.$store.commit('registerInfos', JSON.parse(localStorage.userMsg))
              return {name: 'AppMinePersonal'}
            }
          }
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
