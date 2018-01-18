<template>
  <div class="app-box app-story">
    <!-- 搜索 -->
    <div class="story-search">
      <div class="search-box" @click="toSearch">
        <span><i class="search-icon fa fa-search"></i><span>搜索</span></span>
      </div>
    </div>
    <!-- 内容 -->
    <app-story-content></app-story-content>
    <!-- 写故事 -->
    <app-story-write></app-story-write>
  </div>
</template>

<script>
  import AppStoryContent from './AppStoryContent'
  import AppStoryWrite from './AppStoryWrite'
  export default {
    name: 'app-story',
    data () {
      return {
        result: [
          {title: '土耳其', value: '朗玛'},
          {title: '巴黎', value: '打算'},
          {title: '北京', value: '和人'}
        ],
        active: true
      }
    },
    methods: {
      toSearch () {
        this.$router.push('/appstorysearch')
      }
    },
    components: {
      AppStoryContent,
      AppStoryWrite
    }
  }
</script>

<style lang="scss">
  .app-story{
    display: flex;
    flex-direction: column;
    position: relative;
    // padding: 10px 10px 0;
    .story-search{
      padding: 10px;
      background: #fff;

    }
  }
  .mint-navbar{
    border-bottom: 1px solid #cacaca;
  }
  .mint-navbar .mint-tab-item{
    height: 100%;
    padding: 0 !important;
    height: 40px;
    // line-height: 40px;
  }
  .mint-navbar .mint-tab-item.is-selected{
    color: #009d25 !important;;
    border: none !important;
    .mint-tab-item-label{
      
      border-bottom: 2px solid #009d25;
    }
  }
  .mint-tab-item-label{
    display: inline-block;
    height: 15px;
    padding: 10px 0;
    // line-height: 28px;
    font-size: 14px;
  }
</style>