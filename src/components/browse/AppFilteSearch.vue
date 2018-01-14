<template>
  <div class="toast-box app-filte-search">
    <mt-header title="搜索">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="data-list">
      <search-bar :hotSites="hotSites" :histories="histories"></search-bar>
    </div>
  </div>
</template>

<script>
  import SearchBar from '../common/SearchBar'
  export default {
    name: 'app-filte-search',
    data () {
      return {
        startTime: '',
        endTime: '',
        hotSites: [
          {name: '东京', imgUrl: 'http://img0.imgtn.bdimg.com/it/u=680548402,3363944420&fm=27&gp=0.jpg'},
          {name: '北京', imgUrl: 'http://img0.imgtn.bdimg.com/it/u=680548402,3363944420&fm=27&gp=0.jpg'},
          {name: '巴黎', imgUrl: 'http://img0.imgtn.bdimg.com/it/u=680548402,3363944420&fm=27&gp=0.jpg'},
          {name: '法国', imgUrl: 'http://img0.imgtn.bdimg.com/it/u=680548402,3363944420&fm=27&gp=0.jpg'}
        ],
        histories: [
          {name: '土耳其'},
          {name: '迈阿密'}
        ]
      }
    },
    components: {
      SearchBar
    }
  }
</script>

<style lang="scss">
  
</style>
