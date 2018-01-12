<template>
  <div class="app-mine-register-box">
    <div class="register-tel">
      <i class="fa fa-user-o"></i>
      <input type="number" class="tel" placeholder="请输入手机号"/>
    </div>
    <div class="register-verifycode">
      <i class="iconfont icon-verifycode">&#xe61b;</i>
      <input type="number" class="verifycode" placeholder="请输入验证码"/>
      <button>获取验证码</button>
    </div>
    <div class="register-tel">
      <i class="iconfont icon-pwd">&#xe603;</i>
      <input type="password" class="pwd" placeholder="设置密码，6-20个字符"/>
    </div>
    <input class="btn" type="button" value="注册"/>
  </div>
</template>

<script>
  export default {
    name: 'app-mine-register-box'
  }
</script>

<style lang="scss">
  .app-mine-register-box{
    margin-top: 0.42rem;

    div {
      display: flex;
      justify-content: space-between;
      width: 3.31rem;
      height: 0.44rem;
      margin: 0.11rem 0.22rem 0;
      border-radius: 5px;
      i {
        display: block;
        width:0.44rem;
        height: 0.44rem;
        line-height: 0.41rem;
        text-align: center;
        background: #fff;
        border-right: 1px solid #E5E5E5;
        font-size: 26px;
        color:#999;
      }
      .icon-pwd {
        font-size: 28px;
      }
      input {
        width:3.21rem;
        height:100%;
        padding-left:0.1rem;
      }
      .verifycode {
        width:1.43rem;
        border-radius: 5px;
        margin-right: 0.1rem;
      }
      button {
        width:1.41rem;
        border-radius: 5px;
        background: #FF3D84;
        color:#fff;
      }
    }
    .btn {
      width:3.31rem;
      height:0.41rem;
      background: #FF3D84;
      color:#fff;
      border-radius: 5px;
      margin: 0.42rem 0.22rem 0rem;
      font-size: 16px;
    }
    
  }
</style>

