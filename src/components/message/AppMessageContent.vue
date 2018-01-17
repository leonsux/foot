<template>
  <div class="app-message-content">
    
    <app-message-item v-for="item in messages" :message="item" :key="item.key"></app-message-item>

    <div v-if="!messages.length" class="no-msg">
      空空如也
    </div>
    
  </div>
</template>

<script>
  import AppMessageItem from './AppMessageItem'
  
  export default {
    name: 'app-message-content',
    data () {
      return {
        messages: [
          {type: 'system', imgUrl: './static/imgs/tz.png', title: '系统通知', content: '传统聚会方式已经out啦，包大HOUSE开趴才是正经事！人均更低呦'},
          {type: 'sales', imgUrl: './static/imgs/cx.png', title: '优惠促销', content: '"佛系青年"应该住怎样的民宿？'}
        ]
      }
    },
    mounted () {
      // console.log('loading msg')
    },
    components: {
      AppMessageItem
    }
  }
</script>

<style lang="scss">
  .app-message-content{
    height: 100%;
    overflow-y: auto;
    margin-top: 15px;
  }
  .app-message-content::-webkit-scrollbar {
    display: none;
  }
</style>

