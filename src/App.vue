<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <app-tab-bar></app-tab-bar>
  </div>
</template>

<script>
import AppTabBar from './components/tab-bar/AppTabBar'
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
}
.mint-search{
  height: auto;
}
.mint-search-list{
  max-height: 300px;
}
.mint-header{
  background: #fff;
  color: #666;
  height: 50px;
  // box-shadow: 0 1px 1px #ccc;
}
</style>
