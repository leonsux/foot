<template>
  <div class="app-box app-mine-set-invite">
    <mt-header title="邀请好友">
      <router-link to="/set" slot="left">
        <i class="iconfont icon-houtui"></i>
      </router-link>
    </mt-header>
    <div class="box">
      <h4>送￥100赠￥100</h4>
      <p>好友在通过您的链接注册账号后将会获得￥100旅行基金。</p>
      <p>若您的好友完成第一趟￥500的旅行，您即可获得￥100旅行基金。</p>
    </div>
    <button @click="callCS()" class="btn" type="submit">好友链接</button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'app-mine-set-invite',
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
  .app-mine-set-invite{
    width:100%;
    font-size: 16px;
    .mint-header{
      background-color: #fff;
      color:#333;
      font-size: 16px;
      i {
        font-size: 20px;
        padding-right: 10px;
      }
    }
    .box {
      width:310px;
      height:200px;
      margin:10px 12px 25px;
      background: #fff;
      border-radius: 5px;
      padding:20px;

      h4 {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p{
        padding-top:10px;
        color:#666;
      }
    }
    .btn {
      width:96px;
      height: 40px;
      display: block;
      margin: 0 auto;
      background:#ff3d84;
      color:#fff;
      border-radius:5px;
    }
  }
  
</style>
