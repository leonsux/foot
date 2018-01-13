<template>
  <div class="app-mine-login-box">
      <div class="login-ico">
        <p>用户名</p>
        <div class="login">
          <i class="fa fa-user-o"></i>
          <input type="number" class="tel" placeholder="请输入手机号"/>
        </div>
        <p>密码</p>
        <div class="login">
          <i class="iconfont icon-pwd">&#xe603;</i>
          <input type="password" class="pwd" placeholder="请输入密码"/>
          <i class="iconfont icon-eye">&#xe61d;</i>
        </div>
        <div class="auto">
          <span><input type="checkbox" >&nbsp;&nbsp;记住密码</span>
          <span><input type="checkbox" >&nbsp;&nbsp;自动登录</span>
        </div>
        <button class="login-btn" type="submit" >登录</button>
        <div class="re-links">
          <router-link :to="{name: 'AppMineRegister'}">忘记密码？</router-link>
          <router-view></router-view>
          <router-link :to="{name: 'AppMineRegister'}">新用户注册</router-link>
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
       margin-top: 0.18rem;
       color:#333;
       font-size: 16px;
        .login-ico{
          width: 3.3rem;
          margin: 0 auto;
          p {
            padding:0.12rem 0rem;
          }
          .login {
            display: flex;
            justify-content: space-between;
            height: 0.44rem;
            border-radius: 5px;
            margin-bottom:0.12rem;
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
            .icon-eye{
              padding-right:5px;
            }
            input {
              width:3.21rem;
              height:100%;
              font-size: 12px;
              padding-left:0.1rem;
              border:none;
            }
            .pwd{
                width:2.52rem;
            }
          }
          .auto {
            display: flex;
            justify-content: space-between;
            height:0.3rem;
          }
          button{
            display: block;
            height:40px;
            font-size: 16px;
            background: #FF3D84;
            border: none;
            border-radius: 5px;
            color: #fff;
            width: 100%;
            line-height: 40px;
            margin: auto;
        }
        .re-links{
            display: flex;
            justify-content: space-between;
            a{
              color:#FF3D84;
              padding-top: 0.1rem;
            }
            
        }
      }
        
    }

</style>
