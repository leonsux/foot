<template>
  <div class="app-mine-login-header">
    <mt-header title="登录">
      <router-link to="/" slot="left">
      </router-link>
    </mt-header> 
  </div>
</template>

<script>
export default {
  name: 'app-mine-login-header'
}
</script>

<style lang="scss">
  .app-mine-login-header{
    .mint-header{
      height: 50px;
      font-size: 16px;
      color:#333;
      background: #F5F5F5;
      .fa-angle-left{
        font-size: 32px;
      }
    }
  
  }
</style>

