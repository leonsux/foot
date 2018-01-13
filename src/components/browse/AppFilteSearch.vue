<template>
  <div class="toast-box app-filte-search">
    <mt-header title="搜索">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="data-list">
      <div class="searchBox">
        <input class="" type="text" v-model="searchKey">
      </div> 
      <div class="hot-site">
        <p>热门目的地</p>
        <ul>
          <li v-for="item in hotSites">
            <img :src="item.imgUrl" alt="" :title="item.name">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="history-search">
        <p>最近搜索</p>
        <ul>
          <li @click="searchKey=item.name" v-for="item in histories">
            {{item.name}}
          </li>
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
