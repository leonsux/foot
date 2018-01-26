<template>
  <div class="app-mine-login-box">
    <div class="login-ico">
      <form action="" method="" @submit.prevent = 'loginInfos'>
        <div class="login-item">
          <label class="label" for="tel">手机号</label>
          <p class="login">
            <i class="fa fa-user-o"></i>
            <input v-model="loginInfo.userTel" type="number" class="tel" name="tel" placeholder="请输入手机号"/>
          </p>
        </div>
        <div class="login-item">
          <label class="label" for="pwd">密码</label>
          <p class="login">
            <i class="iconfont icon-pwd">&#xe603;</i>
            <input v-model="loginInfo.userPwd"  :type="visi ? 'text' : 'password'" class="pwd" name="pwd" placeholder="请输入密码"/>
            <i @click="visi=!visi" :class="!visi?'fa fa-eye-slash':'fa fa-eye'"></i>
          </p>
        </div>          
        <div class="auto">
          <!-- <span><input type="checkbox" >&nbsp;&nbsp;记住密码</span>
          <span><input type="checkbox" >&nbsp;&nbsp;自动登录</span> -->
        </div>
        <button @click="loginInfos('', {userTel:loginInfo.userTel,userPwd:loginInfo.userPwd})" class="login-btn" type="submit" >登录</button>
        <div class="re-links">
          <!-- <router-link :to="{name: 'AppMineRegister'}">忘记密码？</router-link> -->
          <router-view></router-view>
          <router-link :to="{name: 'AppMineRegister'}">新用户注册</router-link>
          <router-view></router-view>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AppMineRegister from '../register/AppMineRegister'
import { Toast } from 'mint-ui'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

export default {
  name: 'app-mine-login-box',
  data () {
    return {
      loginInfo: {
        userTel: '',
        userPwd: ''
      },
      visi: false
    }
  },
  methods: {
    ...mapMutations(['setInfo']),
    loginInfos (e, params) {
      let that = this
      let para = new URLSearchParams()
      para.append('tel', params.userTel)
      para.append('password', params.userPwd)
      axios.post('api/mine/login.php', para)
        .then(res => {
          // console.log('登陆反馈：', res)
          if (res.data.status === 1 || res.data.status === '1') {
            Toast({
              message: '登陆成功！',
              duration: 1000
            })
            that.$router.push({name: 'AppMinePersonal'})
            that.setInfo({
              userTel: res.data.userName,
              userImg: res.data.userImg
            })
            // setTimeout(() => {
            // }, 0)
          } else {
            Toast({
              message: '登陆失败！',
              duration: 1000
            })
          }
        }).catch(res => {
          Toast({
            message: '网络故障！',
            duration: 1000
          })
          throw res
        })
      /*
      let that = this
      if (!params) {
        return
      }
      if (!localStorage.userMsg) {
        Toast({
          message: '登录失败',
          duration: 1000
        })
        return
      }
      var userMsg = JSON.parse(localStorage.userMsg)

      for (var i = 0; i < userMsg.length; i++) {
        if (userMsg[i].userTel === params.userTel && userMsg[i].userPwd === params.userPwd) {
          Toast({
            message: '登录成功',
            duration: 1000
          })
          this.setInfo(userMsg[i])
          setTimeout(() => {
            that.$router.replace({name: 'AppMinePersonal'})
          })
          break
        }
      }
      if (i === userMsg.length) {
        Toast({
          message: '登录失败',
          duration: 1000
        })
      }
      */
    }
  },
  components: {
    AppMineRegister
  },
  computed: {
    ...mapState(['userMsg'])
  },
  created () {
    if (this.userMsg.userTel) {
      this.$router.replace({name: 'AppMinePersonal'})
    }
  }
}
</script>

<style lang="scss" scoped>
    .app-mine-login-box{    
       margin-top: 0.18rem;
       color:#333;
       font-size: 16px;
        form {
          width: 3.3rem;
          margin: 0 auto;
          .login-item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            >span{
              margin: 0 auto;
              color:#FF3D84;
            }
            label {
              padding-bottom:0.12rem;
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
              .icon-yanjing-bi{
                  padding-right:5px;
              }
              input {
                  width:3.21rem;
                  height:100%;
                  // font-size: 1px;
                  padding-left:0.1rem;
                  border:none;
                  letter-spacing: 2px;
              }
              .pwd{
                  width:2.52rem;
              }
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

