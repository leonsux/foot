<template>
  <div class="toast-box app-story-search">
    <mt-header title="搜索">
      <router-link to="/appstory" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    
    <search-bar :hotSites="hotSites" :histories="histories"></search-bar>
  </div>
</template>

<script>
  import SearchBar from '../common/SearchBar'
  export default {
    name: 'app-story-search',
    data () {
      return {
        searchKey: '',
        hotSites: [
          {name: '东京', imgUrl: 'http://img0.imgtn.bdimg.com/it/u=680548402,3363944420&fm=27&gp=0.jpg'},
          {name: '北京', imgUrl: 'http://img0.imgtn.bdimg.com/it/u=680548402,3363944420&fm=27&gp=0.jpg'},
          {name: '巴黎', imgUrl: 'http://img0.imgtn.bdimg.com/it/u=680548402,3363944420&fm=27&gp=0.jpg'},
          {name: '法国', imgUrl: 'http://img0.imgtn.bdimg.com/it/u=680548402,3363944420&fm=27&gp=0.jpg'}
        ],
        histories: [
          {name: '天妇罗'},
          {name: '烤羊腿'}
        ]
      }
    },
    components: {SearchBar}
  }
</script> 

<style lang="scss">
  
</style>
