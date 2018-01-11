<template>
  <div class="app-mine-register-header">
    <mt-header title="注册">
      <router-link to="/" slot="left">
        <i class="fa fa-angle-left"></i>
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
      .fa-angle-left{
        font-size: 32px;
      }
    }
  
  }
</style>

