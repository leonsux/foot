<template>
  <div class="app-mine-personal">
    <mt-header title="个人中心">
      <router-link to="/set" slot="right">
        <i class="iconfont icon-shezhi"></i>
      </router-link>
    </mt-header>
    <AppMinePersonalMsg></AppMinePersonalMsg>
    <AppMinePersonalItem></AppMinePersonalItem>
  </div>
</template>

<script>
import AppMinePersonalMsg from './AppMinePersonalMsg'
import AppMinePersonalItem from './AppMinePersonalItem'
export default {
  name: 'app-mine-personal',
  components: {
    AppMinePersonalMsg,
    AppMinePersonalItem
  }
}
</script>

<style lang="scss" scoped>
  .app-mine-personal{
    width:100%;
    font-size: 16px;
    .mint-header{
      background-color: #ff3d84;
      color:#fff;
      font-size: 16px;
      i {
        font-size: 20px;
        color:#fff;
      }
    }
  }
  
</style>
