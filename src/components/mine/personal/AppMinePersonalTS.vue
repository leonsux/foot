<template>
  <div class="app-box app-mine-personal-ts">
    <mt-header title="">
      <router-link to="/personal" slot="left">
        <i class="iconfont icon-houtui" ></i>
      </router-link>
    </mt-header>
    <div class="sorry">
      <img src="/static/imgs/sorry.gif" alt=""/>
      <p>玩命开发中~，敬请期待</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-mine-personal-ts'
}
</script>

<style lang="scss" scoped>
  .app-mine-personal-ts{
    width:100%;
    font-size: 16px;
    background: #fff;
    .mint-header{
      background-color: #fff;
      color:#666;
      i{
        font-size: 20px;
        padding-right: 10px;
      }
    }
    .sorry{
      width:100%;
      height:100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  
</style>
