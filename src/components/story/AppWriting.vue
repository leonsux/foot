<template>
  <div class="toast-box app-writing">
    <mt-header title="写故事">
      <router-link to='/appstory' slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="write-area">
      <div class="upload-img">
        <div class="load-box">
          <img :src="src" ref="img" onerror="this.src='http://cdn3.freepik.com/image/th/318-38775.jpg';this.onerror=null;">
          <input type='file' @change="change" ref="input">
        </div>
        <p style="color: #ccc; margin-left: 5px;">点击上传图片</p>
        
      </div>

      <textarea v-model="txt" placeholder="请书写你的故事" name="" id="" cols="30" rows="10"></textarea>
      <button class="finish-btn" @click="finishWrite">完成</button>
    </div>
  </div>
</template>

<script>
  import { Indicator, Toast, MessageBox } from 'mint-ui'
  import axios from 'axios'
  export default {
    name: 'app-writing',
    data () {
      return {
        src: '',
        elInput: null,
        defaultImg: 'http://cdn3.freepik.com/image/th/318-38775.jpg',
        isFinish: false,
        txt: ''
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.isFinish) {
        next()
        return
      }
      MessageBox.confirm('退出不会保留编辑信息哦~', '')
        .then(res => {
          next()
        }).catch(() => {
        })
    },
    methods: {
      change (e) {
        this.getSize(e)
        this.getSrc()
      },
      getSrc () {
        const refs = this.$refs
        const elInput = refs.input
        const elImg = refs.img
        const reader = new FileReader()
        reader.onload = (e) => {
          // 这里的result就是base64格式的地址
          const src = e.target.result
          // console.log('base64：', src)
          elImg.src = src
          this.src = src
        }
        if (elInput.files && elInput.files[0]) {
          reader.readAsDataURL(elInput.files[0])
        }
      },
      getSize (e) {
        // console.log(e)
        console.log(e.target.files[0].size)
        return e.target.files[0].size
      },
      finishWrite () {
        // alert('sf')
        let that = this
        this.isFinish = true
        Indicator.open({
          text: '发送中...',
          spinnerType: 'triple-bounce'
        })
        setTimeout(() => {
          var para = new URLSearchParams()
          para.append('title', this.txt.slice(0, 5))
          para.append('content', this.txt)
          para.append('site', '北京')
          para.append('imgUrl', this.src)
          axios.post('api/story/writestory.php', para)
            .then(res => {
              console.log('写故事反馈：', res)
              Indicator.close()
              if (res.data.status_code === 200 || res.data.status_code === '200') {
                that.$router.replace('/appstory')
                Toast({
                  message: '发送成功！',
                  duration: 1000
                })
              } else if (res.data.status_code === 0 || res.data.status_code === '0') {
                Toast({
                  message: '请先登录！',
                  duration: 1000
                })
              } else {
                Toast({
                  message: '发送失败！',
                  duration: 1000
                })
              }
            })
            .catch(res => {
              Indicator.close()
              Toast({
                message: '哎？发送失败了！',
                duration: 1000
              })
              throw res
            })
        }, 1000)
      }
    }
  }
</script> 

<style lang="scss">
  .app-writing{
    
    .write-area{
      padding: 0 10px;
      background: #f5f5f5;
      height: 100%;
      display: flex;
      flex-direction: column;
      .upload-img{
        height: 100px;
        background: #fff;
        margin-bottom: 10px;
        display: flex;
        align-items: flex-end;
        .load-box{
          margin-left: 10px;
          width: 50px;
          height: 50px;
          position: relative;
          > input{
            font-size: 0; /*为了不让他显示‘未选择任何文件’*/
            height: 50px;
            width: 50px;
            position: absolute;
            opacity: 0;
          }
          > img{
            width: 50px;
            height: 50px;
            border: 1px solid #ccc;
            position: absolute;
          }
        }
      }
      > textarea{
        padding: 20px;
        border-radius: 10px;
      }
    }
    .finish-btn{
      // position: fixed;
      // right: 30px;
      // bottom: 30px;
      width: 100%;
      display: block;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 50px;
      background: #fff;
      color: #ff5996;
    }
  }
</style>
