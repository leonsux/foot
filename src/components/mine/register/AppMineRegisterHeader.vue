<template>
  <div class="app-mine-register-header">
    <mt-header title="新用户注册">
      <router-link to="/" slot="left">
      </router-link>
    </mt-header> 
  </div>
</template>

<script>
export default {
  name: 'app-mine-register-header'

}
</script>

<style lang="scss">
  .app-mine-register-header{
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

