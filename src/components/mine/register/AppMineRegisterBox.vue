<template>
  <div class="app-mine-register-box">
    <form action="" methods="">
      <div class="register-item">
        <p class="register-tel">
          <i class="fa fa-user-o"></i>
          <input v-model="registerInfo.tel" type="number" name="tel" class="tel" placeholder="请输入手机号"/>
        </p>
      </div>     
      <div class="register-item">
        <p class="register-verifycode">
          <i class="iconfont icon-verifycode">&#xe61b;</i>
          <input v-model="registerInfo.code" type="number" class="verifycode" placeholder="请输入验证码"/>
          <span v-if="registerInfo.sendAuthCode" class="auth_text" @click="getAuthCode">获取验证码</span>
          <span v-else :style="{ background: '#fff' , color: '#999'}" class="auth_text">{{registerInfo.auth_time}} 秒之重新发送</span> 
        </p>
      </div>
      <div class="register-item">
        <p class="register-tel">
          <i class="iconfont icon-pwd">&#xe603;</i>
          <input v-model="registerInfo.password" type="password" name="password" class="pwd" placeholder="设置密码，6-20个字符"/>
        </p>
      </div>
      
      <button @click.prevent="handleRegisterclick({userTel:registerInfo.tel,userCode:registerInfo.code, userPwd:registerInfo.password})" class="btn" type="submit">注册</button>
    </form>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import axios from 'axios'
  export default {
    name: 'app-mine-register-box',
    data () {
      return {
        registerInfo: {
          sendAuthCode: true,
          auth_time: 0,
          tel: '',
          password: '',
          code: ''
        }
      }
    },
    methods: {
      getAuthCode: function () {
        let para = new URLSearchParams()
        para.append('post_number', this.registerInfo.tel)
        axios.post('api/mine/send.php', para)
          .then(res => {
            if (res.status === 1 || res.status === '1') {
              // console.log('发送成功！')
            } else {
              // console.log('发送失败')
            }
          })
          .catch(res => {
            throw res
          })

        this.registerInfo.sendAuthCode = false
        this.registerInfo.auth_time = 60
        var authTimetimer = setInterval(() => {
          this.registerInfo.auth_time --
          if (this.registerInfo.auth_time <= 0) {
            this.registerInfo.sendAuthCode = true
            clearInterval(authTimetimer)
          }
        }, 1000)
      },
      handleRegisterclick (params) {
        var telReg = /^1[3|4|5|7|8][0-9]{9}$/
        if (!telReg.test(params.userTel)) {
          Toast({
            message: '手机格式不正确',
            duration: 1000
          })
          return 0
        }
        if (params.userCode.trim() === '') {
          Toast({
            message: '请输入短信验证码',
            duration: 1000
          })
          return 0
        }

        if (params.userPwd.length < 6 || params.userPwd.length > 20) {
          Toast({
            message: '密码长度不正确',
            duration: 1000
          })
          return 0
        } else {
          // this.$store.commit('AppMineRegister', params)
          // 本地存储模拟
          // console.log(localStorage.userMsg, params)
          let arr = localStorage.userMsg ? JSON.parse(localStorage.userMsg) : []
          arr.push(params)
          localStorage.userMsg = JSON.stringify(arr)

          let para = new URLSearchParams()
          para.append('tel', this.registerInfo.tel)
          para.append('password', this.registerInfo.password)
          para.append('veryfiy_code', this.registerInfo.code)
          axios.post('api/mine/register.php', para)
            .then(res => {
              if (res.data.status === 1 || res.data.status === '1') {
                Toast({
                  message: '注册成功！',
                  duration: 1000
                })
                this.$router.push({name: 'AppMineLogin'})
              } else {
                Toast({
                  message: '注册失败咯~',
                  duration: 1000
                })
              }
            })
            .catch(res => {
              Toast({
                message: '不知名的网络问题！',
                duration: 1000
              })
              throw res
            })
        }
      }
    }
  }
</script>

<style lang="scss">
  .app-mine-register-box{
    width:100%;
    margin-top: 15px;
    .register-item{
      p {
        display: flex;
        justify-content: space-between;
        width: 3.31rem;
        height: 0.44rem;
        margin: 0 22px 22px;
        border-radius: 5px;
        i {
          display: block;
          width:0.44rem;
          height: 0.44rem;
          line-height: 44px;
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
          width:3rem;
          height:100%;
          padding-left:10px;
        }
        .verifycode {
          width:1.41rem;
          border-radius: 5px;
          margin-right: 10px;
        }
        span {
          display: block;
          text-align:center;
          line-height:44px;
          width:140px;
          border-radius: 5px;
          background: #FF3D84;
          color:#fff;
        }
      }
    }
    .btn {
      width:3.31rem;
      height:0.42rem;
      background: #FF3D84;
      color:#fff;
      border-radius: 5px;
      margin: 0.21rem 0.22rem 0rem;
      font-size: 16px;
    }
    
  }
</style>



