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

import AppFavorite from '@/components/favorite/AppFavorite'
import AppMessage from '@/components/message/AppMessage'
// 我的
import AppMine from '@/components/mine/AppMine'
// 我的 登录
import AppMineLogin from '@/components/mine/login/AppMineLogin'
// 我的 注册
import AppMineRegister from '@/components/mine/register/AppMineRegister'
// 我的 个人中心
import AppMinePersonal from '@/components/mine/personal/AppMinePersonal'
// 我的 个人中心 客服
import AppMinePersonalCS from '@/components/mine/personal/AppMinePersonalCS'
// 我的 注册
import AppMineSet from '@/components/mine/set/AppMineSet'
import AppMineSetInvite from '@/components/mine/set/AppMineSetInvite'
import AppMineSetAbout from '@/components/mine/set/AppMineSetAbout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppBrowse',
      component: AppBrowse
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
        },
        {
          path: '/set',
          name: 'AppMineSet',
          component: AppMineSet
        }
      ]
    },
    {
      path: '/personal',
      name: 'AppMinePersonalCS',
      component: AppMinePersonalCS
    },
    {
      path: '/set',
      name: 'AppMineSetInvite',
      component: AppMineSetInvite
    },
    {
      path: '/set',
      name: 'AppMineSetAbout',
      component: AppMineSetAbout
    }
  ]
})
