<template>
  <div class="app-box app-mine-personal-cs">
    <mt-header title="客服">
      <router-link to="/personal" slot="left">
        <i class="iconfont icon-houtui" ></i>
      </router-link>
    </mt-header>
    <div class="kefu">
      <div class="left">
        <h4>24小时客服</h4>
        <p>400-188-1234</p>
      </div>
      <button @click="callCS()" type="submit">立即咨询</button>
    </div>
    <div class="kefu">
      <div class="left">
        <h4>在线客服</h4>
        <p>24小时客服</p>
      </div>
      <button @click="callCS()" type="submit">立即咨询</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'app-mine-personal-cs',
  methods: {
    callCS () {
      Toast({
        message: '阿喔，客服开小差了，请稍后再来~',
        duration: 2000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-mine-personal-cs{
    width:100%;
    font-size: 16px;
    .mint-header{
      background-color: #ff3d84;
      color:#fff;
      font-size: 16px;
      i{
        font-size: 20px;
        padding-right: 10px;
      }
    }
    .kefu{
      width:100%;
      height: 52px;
      background: #fff;
      margin-top: 21px;
      padding:8px;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
   
      .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h4 {
          color:#333;
          font-weight: normal;
        }
        p{
          color:#ff5996;
          font-size: 10px;
        }        
      }
      button {
        margin-right: 18px;
        width:100px;
        height: 30px;
        border-radius: 5px;
        background: #ff5996;
        color:#fff;
      }
    }
  }
  
</style>
