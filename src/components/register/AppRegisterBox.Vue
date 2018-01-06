<template>
  <div class="app-register-box">
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
    <mt-field label="确认密码" placeholder="请确认密码" type="password"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>

    <mt-field label="验证码" placeholder="请输入验证码">
      <!-- <button class="identifying-code">获取验证码</button> -->
      <mt-button type="primary">获取验证码</mt-button>
    </mt-field>
  </div>
</template>

<script>
  export default {
    name: 'app-register-box'
  }
</script>

<style lang="scss">
  .app-register-box{
    .mint-cell{
      width:100%;
      .identifying-code{
        display:block;
        height: 0.45rem;
        width:1rem;
        background: rgb(0, 195, 255);
        text-align: center;
        line-height: 0.45rem;
        font-size: 16px;
        color:#fff;
      }
    }
  }
</style>

