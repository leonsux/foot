<template>
  <div @click="toMsgDetail(message)" class="app-message-item">
    <div class="message-ico"><!-- <i class="fa fa-volume-up"> --><img :src="message.imgUrl" alt=""></i></div>
    <div class="message-info">
      <h2>{{message.title}}</h2>
      <p>{{message.content}}</p>
    </div>
    
  </div>
</template>

<script>
  
  export default {
    name: 'app-message-item',
    props: ['message'],
    data () {
      return {
        messages: []
      }
    },
    methods: {
      toMsgDetail (msg) {
        this.$router.push({
          path: '/message',
          name: 'AppMsgDetail',
          params: {msg}
        })
      }
    }
  }
</script>

<style lang="scss">
  .app-message-item{
    height: 45px;
    background: #fff;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 5px;
    .message-ico{
      width: 29px;
      height: 29px;
      text-align: center;
      line-height: 29px;
      font-size: 24px;
      color: blue;
      > img{
        width: 29px;
        height: 29px;
      }
    }
    .message-info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 90%;
      > h2{
        font-size: 14px;
        font-weight: 500;
      }
      > p{
        font-size: 12px;
        color: #999;
      }
      > h2, > p{
        width: 98%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
</style>