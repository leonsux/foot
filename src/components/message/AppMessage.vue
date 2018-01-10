<template>
  <div class="app-box app-message">
    <mt-header title="">
      <mt-button class="fa fa-envelope-o" slot="right"></mt-button>
    </mt-header>
    
    <app-message-content></app-message-content>
  </div>
</template>

<script>
  import AppMessageContent from './AppMessageContent'
  
  export default {
    name: 'app-message',
    data () {
      return {
        messages: []
      }
    },
    components: {
      AppMessageContent
    }
  }
</script>

<style lang="scss">
  .app-message{
    display: flex;
    flex-direction: column;
  }
</style>