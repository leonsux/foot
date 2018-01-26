<template>
  <div class="app-mine-personalMsg">
    <i>
      <img class="user-img" :src="userImg" alt="" ref="img"/>
      <input type='file' @change="changeImg" ref="input">
    </i>
    <span>{{userMsg.userTel}}</span>
  </div>  
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Toast } from 'mint-ui'
import axios from 'axios'

export default {
  name: 'app-mine-personalMsg',
  data () {
    return {
      userImg: ''
    }
  },
  methods: {
    ...mapMutations(['setInfo']),
    changeImg () {
      const refs = this.$refs
      const elInput = refs.input
      const elImg = refs.img

      const reader = new FileReader()
      reader.onload = (e) => {
        // 这里的result就是base64格式的地址
        const src = e.target.result
        this.userImg = src
        this.setInfo({...this.userMsg, userImg: src})
        let arr = JSON.parse(localStorage.userMsg)
        arr.forEach((item, i) => {
          if (item.userTel === this.userMsg.userTel) {
            item.userImg = src
          }
        })
        localStorage.userMsg = JSON.stringify(arr)
        elImg.src = src  // 给预览图片加上地址
        // 下面可以把图片信息发送到后台，base64，图片名，之类
        let para = new URLSearchParams()
        para.append('userTel', this.userMsg.userTel)
        para.append('userImg', src)
        axios.post('api/mine/changeimg.php', para)
          .then(res => {
            if (res.status_code === 200) {
              Toast('设置成功！')
            } else if (res.status_code === 10) {
              Toast('网络异常！')
            }
          })
      }
      if (elInput.files && elInput.files[0]) {
        reader.readAsDataURL(elInput.files[0])
      }
    }
  },
  computed: mapState(['userMsg']),
  mounted () {
    this.userImg = this.userMsg.userImg ? this.userMsg.userImg : '/static/imgs/img.jpg'
  }
}
</script>

<style lang="scss" scoped>
  .app-mine-personalMsg {
      height: 80px;
      margin: 10px 0;
      background: #fff;
      display: flex;
      align-items: center;
      > i{
        display: block;
        width:60px;
        height: 60px;
        padding: 0 20px;
        border-radius: 50%;
        position: relative;
        .user-img{
          width: 60px;
          height: 60px;
          border: 1px solid #ccc;
          border-radius: 50%;
          position: absolute;
        }
        > input{
          width: 60px;
          height: 60px;
          position: absolute;
          opacity: 0;  // 隐藏input，
          position: absolute;
        }
        
      }
  }
</style>
