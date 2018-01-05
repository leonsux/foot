<template>
  <div class="app-register-header">
    <mt-header title="注册">
      <router-link to="/" slot="left">
        <i class="fa fa-angle-left"></i>
      </router-link>
    </mt-header> 
  </div>
</template>

<script>
export default {
  name: 'app-register-header'
}
</script>

<style lang="scss">
  .app-register-header{
    .mint-header{
      height: 50px;
      font-size: 16px;
      .fa-angle-left{
        font-size: 32px;
      }
    }
  
  }
</style>

