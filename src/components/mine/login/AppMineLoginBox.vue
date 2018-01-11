<template>
  <div class="app-mine-login-box">
      <div class="login-con">
        <div class="login">
          用户名：<input  type="text" placeholder="请输入ID/邮箱/手机号">  
      </div>
      <div class="login-password">
          密码：<input  type="password" placeholder="密码">
      </div>
      <button class="login-btn" type="submit" >登&nbsp;录</button>
      <div class="auto">
        <span><input type="checkbox" >自动登录</span>
        <router-link :to="{name: 'AppMineRegister'}">免费注册</router-link>
        <router-view></router-view>
      </div>
      </div>
  </div>
</template>

<script>
import AppMineRegister from '../register/AppMineRegister'
export default {
  name: 'app-mine-login-box',
  components: {
    AppMineRegister
  }
}
</script>

<style lang="scss" scoped>
    .app-mine-login-box{

        width: 100%;
        .login-con{
            width: 90%;
            margin: auto;
        }
        .login,.login-password{
            color: #666;
            line-height: 32px;
            display: flex;
            padding: 15px;
            margin-top: 5px;
            justify-content: space-around;
            input{
                padding-left:5px;
                border: 1px solid #DFDFDF;
                height: 30px;
                width: 247px;
            }
        }
        button{
            display: block;
            height:40px;
            font-size: 16px;
            background: #FF2233;
            border: none;
            border-radius: 5px;
            color: #fff;
            width: 100%;
            line-height: 40px;
            margin: auto;
        }
        .auto{
            display: flex;
            justify-content: space-between;
            margin-top:20px;
            a{
                color: #5790bb;
            }
        }
        
    }

</style>
