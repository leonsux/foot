<template>
  <div class="toast-box app-msg-detail">
    <div>
      <mt-header :title="detail.title">
        <router-link to="/message" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="chat-box">
        <div class="msg-item">
          <img :src="detail.imgUrl" alt="">
          <p>{{detail.content}}</p>
        </div>
      </div>

      <div class="chat-box" v-for="item in myMsg" v-if="item.toWho===detail.title">
        <div :class="item.type === 'me' ? 'msg-item msg-item-right' : 'msg-item msg-item-left'">
          <img :src="myImg" alt="">
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>

    <div class="send-box">
      <div class="searchBox">
        <input class="" type="text" v-model="txt">
      </div>
      <mt-button @click="sendMsg" type="danger">send</mt-button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'app-msg-detail',
    data () {
      return {
        txt: '',
        detail: this.$route.params.msg,
        myImg: '/static/imgs/img.jpg',
        myMsg: []
      }
    },
    methods: {
      ...mapMutations(['setMyMessage']),
      sendMsg () {
        let params = {
          content: this.txt,
          type: 'me',
          toWho: this.detail.title
        }
        // this.myMsg.push(params)
        this.setMyMessage(params)
        this.txt = ''
      }
    },
    computed: {
      ...mapState(['myMessage', 'userMsg'])
    },
    mounted () {
      this.myImg = this.userMsg.userImg ? this.userMsg.userImg : '/static/imgs/img.jpg'
      this.myMsg = this.myMessage
    }
  }
</script>

<style lang="scss">
  .app-msg-detail{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .chat-box{
      padding: 10px;
    }
    .msg-item{
      display: flex;
      margin-bottom: 5px;
      > img{
        width: 30px;
        height: 30px;
      }
      > p{
        margin-left: 15px;
        padding: 5px;
        background: #ff5996;
        flex: 0.85;
        border-radius: 5px;
        position: relative;
        color: #fff;
        &:before{
          content: '';
          display: block;
          position: absolute;
          transform: translateX(-120%);
          border-width: 6px 10px 6px 0;
          border-style: solid;
          border-color: transparent #ff5996 transparent transparent;
        }
      }
    }
    .msg-item-right{
      flex-direction: row-reverse;
      > p{
        margin-left: 0;
        margin-right: 15px;
        &:before{
          transform: translateX(80%);
          right: 0;
          border-width: 6px 0 6px 10px;
          border-style: solid;
          border-color: transparent transparent transparent #ff5996;
        }
      }
    }
  }
  .send-box{
    display: flex;
    align-items: center;
    padding: 5px;
  }
  .searchBox{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    height: 30px;
    position: relative;

    > input{
      width: 80%;
      padding: 0 20px;
      background: #eee;
      border-radius: 40px;
      height: 100%;
      border: 1px solid red;
    }
    > i{
      position: absolute;
      right: 8%;
    }
  }
</style>