<template>
  <div class="toast-box app-writing">
    <mt-header title="写故事">
      <router-link to="/appstory" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <!-- <router-link to="/appstory" slot="right">
        <mt-button>链接</mt-button>
      </router-link>
      <router-link to="/appstory" slot="right">
        <mt-button>心愿单</mt-button>
      </router-link> -->
    </mt-header>
    <div class="write-area">
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <button class="finish-btn" @click="finishWrite">完成</button>
  </div>
</template>

<script>
  import { Indicator, Toast } from 'mint-ui'
  export default {
    name: 'app-writing',
    methods: {
      finishWrite () {
        // alert('sf')
        Indicator.open({
          text: '发送中...',
          spinnerType: 'triple-bounce'
        })
        setTimeout(() => {
          // Indicator.close()
          Toast({
            message: '发送成功！',
            duration: 1000
          })
          this.$router.push('/appstory')
        }, 1000)
      }
    }
  }
</script> 

<style lang="scss">
  .app-writing{
    
    .write-area{
      height: 100%;
      > textarea{
        width: 100%;
        height: 100%;
      }
    }
    .finish-btn{
      position: fixed;
      right: 30px;
      bottom: 30px;
      display: block;
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 40px;
      font-size: 16px;
    }
  }
</style>
