<template>
  <div class="app-box app-mine-set-about">
    <mt-header title="关于足迹">
      <router-link to="/set" slot="left">
        <i class="iconfont icon-houtui"></i>
      </router-link>
    </mt-header>
    <div class="box">
      <img src="/static/imgs/foot.jpg" alt="" />
      <h4>足迹</h4>
    </div>
    <div class="version">
      <h4>版本号：&nbsp;&nbsp;&nbsp;18.03版本</h4>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'app-mine-set-about',
  methods: {
    callCS () {
      Toast({
        message: '网络不好，请稍后再试~',
        duration: 2000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-mine-set-about{
    width:100%;
    font-size: 16px;
    .mint-header{
      background-color: #ff3d84;
      color:#fff;
      font-size: 16px;
      i {
        font-size: 20px;
        padding-right: 10px;
      }
    }
    .box {
      width:100%;
      height: 87px;
      margin:20px 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width:71px;
        height:71px;
      }
      h4 {
        padding-top: 5px;
      }
    }
    .version {
      width:100%;
      height: 34px;
      background: #fff;
      padding-left: 2%;
      line-height: 34px;
    }

  }
  
</style>
