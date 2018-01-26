<template>
  <div id="app">
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <app-tab-bar></app-tab-bar>
    <transition name="fade">
      <welcome v-if="!isReady"></welcome>
    </transition>
  </div>

</template>

<script>
import './assets/iconfont.css'
import AppTabBar from './components/tab-bar/AppTabBar'
import Welcome from './components/common/Welcome'

// import AppStoryDetail from './components/story/AppStoryDetail'
export default {
  name: 'app',
  components: {
    AppTabBar,
    Welcome
  },
  data () {
    return {
      isReady: false
    }
  },
  beforeCreate () {
  },
  mounted () {
    setTimeout(() => {
      this.isReady = true
    }, 2000)
  }
}
</script>

<style lang="scss">
// @import './styles/app.scss';
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  .mint-header{
    background: #ff5996;
    color: #fff;
    height: 50px;
    font-size: 18px;
    i{
      color: #fff;
      font-size: 24px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.mint-tab-item.is-selected{}
</style>
