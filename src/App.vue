<template>
  <div id="app">
    <!-- <keep-alive :exclude="AppStoryDetail"> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    <app-tab-bar></app-tab-bar>
  </div>
</template>

<script>
import './assets/iconfont.css'
import AppTabBar from './components/tab-bar/AppTabBar'

// import AppStoryDetail from './components/story/AppStoryDetail'
export default {
  name: 'app',
  components: {
    AppTabBar
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
}
.mint-header{
  background: #fff;
  color: #666;
  height: 50px;
}
</style>
