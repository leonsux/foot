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
          {sender: 'leon', content: '来玩呀~'},
          {sender: 'jack', content: '快活啊~'},
          {sender: 'tim', content: '大把时光~'},
          {sender: 'tim', content: '大把时光~'}
        ]
      }
    },
    mounted () {
      console.log('loading msg')
    },
    components: {
      AppMessageItem
    }
  }
</script>

<style lang="scss">
  .app-message-content{
    height: 100%;
    padding: 20px;
    overflow-y: auto;
  }
  .app-message-content::-webkit-scrollbar {
    display: none;
  }
</style>

