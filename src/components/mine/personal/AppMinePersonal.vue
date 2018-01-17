<template>
  <div class="app-mine-personal">
    <div class="personalHeader">
      <span></span>
      <span>我的</span>
      <i @click="toSet()" class="iconfont">&#xe607;</i>
    </div>
    <AppMinePersonalMsg></AppMinePersonalMsg>
    <AppMinePersonalItem></AppMinePersonalItem>
  </div>
</template>

<script>
import AppMinePersonalMsg from './AppMinePersonalMsg'
import AppMinePersonalItem from './AppMinePersonalItem'
export default {
  name: 'app-mine-personal',
  methods: {
    toSet () {
      this.$router.push({name: 'AppMineSet'})
    }
  },
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
    .personalHeader {
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #FF3D84;
      color:#fff;
      i{
        font-size: 20px;
        padding-right: 10px;
      }
    }
  }
  
</style>
