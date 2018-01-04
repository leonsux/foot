<template>
  <div class="app-story-content">
    <!-- 导航 -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="story-food">美食</mt-tab-item>
      <mt-tab-item id="story-culture">文化</mt-tab-item>
      <mt-tab-item id="story-house">房源</mt-tab-item>
      <mt-tab-item id="story-scenery">景点</mt-tab-item>
    </mt-navbar>

    <!-- 内容 -->
    <mt-tab-container v-model="selected" swipeable>
      <mt-tab-container-item id="story-food">
        <!-- <h1>美食</h1> -->
        <div class="app-story-box">
          <app-story-item></app-story-item>
          <app-story-item></app-story-item>
          <app-story-item></app-story-item>
          <app-story-item></app-story-item>
          <app-story-item></app-story-item>
          <app-story-item></app-story-item>
          <app-story-item></app-story-item>
          <app-story-item></app-story-item>
          
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="story-culture">
        <!-- <h1>文化</h1> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="story-house">
        <!-- <h1>房源</h1> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="story-scenery">
        <!-- <h1>景点</h1> -->
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  import AppStoryItem from './AppStoryItem'
  export default {
    name: 'app-story-content',
    data () {
      return {
        value: '',
        active: true,
        selected: 'story-food'
      }
    },
    components: {
      AppStoryItem
    }
  }
</script>

<style lang="scss">
  .app-story-content{
    flex: 1;
    display: flex;
    flex-direction: column;
    .mint-navbar{
      margin-bottom: 10px;
    }
    .mint-tab-container{
      flex: 1;
    }
    .mint-tab-container-wrap{
      height: 100%;
    }
    .app-story-box{
      width: 100%;
      height: 100%;
      // background: blue;
      text-align: center;
      overflow-y: auto;
    }
    .app-story-box::-webkit-scrollbar {
      display: none;
    }
  }
</style>