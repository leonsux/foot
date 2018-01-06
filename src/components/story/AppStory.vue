<template>
  <div class="app-box app-story">
    <!-- 搜索 -->
    <div class="story-search">
      <div class="search-box">
        <span><i class="search-icon fa fa-search"></i><span>带你去旅行</span></span>
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
    // padding: 20px;
    .story-search{
      padding: 20px;
    }
  }
</style>