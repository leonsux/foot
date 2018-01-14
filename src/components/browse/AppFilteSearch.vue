<template>
  <div class="toast-box app-filte-search">
    <mt-header title="搜索">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="data-list">
      <div class="searchBox">
        <input class="" type="text">
      </div> 
      <div class="hot-site">
        <p>热门目的地</p>
        <ul>
          
        </ul>
      </div>
      <div class="history-search">
        <p>最近搜索</p>
        <ul>
          
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-filte-search',
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
