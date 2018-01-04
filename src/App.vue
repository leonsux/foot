<template>
  <div id="app">
    <router-view />
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

<style>
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
</style>
