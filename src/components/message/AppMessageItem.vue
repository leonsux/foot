<template>
  <div class="app-message-item">
    <p>{{message.sender}}</p>
    <p>{{message.content}}</p>
    
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
    }
  }
</script>

<style lang="scss">
  .app-message-item{
    border: 1px solid #ccc;
    margin: 5px 0;
  }
</style>