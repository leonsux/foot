<template>
  <div class="toast-box app-filte-person">
    <mt-header title="选择房客类型">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name: 'app-filte-person',
    data () {
      return {
        startTime: '',
        endTime: ''
      }
    }
  }
</script>

<style lang="scss">
  
</style>
