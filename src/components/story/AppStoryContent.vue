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
      <!-- <h1>美食</h1> -->
      <mt-tab-container-item id="story-food">
        <div class="app-story-box" v-show="selected==='story-food'">
          <app-story-item v-for="item in showStory" :story="item" :key="item.id"></app-story-item>
        </div>
      </mt-tab-container-item>
      <!-- <h1>文化</h1> -->
      <mt-tab-container-item id="story-culture">
        <div class="app-story-box" v-show="selected==='story-culture'">
          <app-story-item v-for="item in showStory" :story="item" :key="item.id"></app-story-item>
        </div>
      </mt-tab-container-item>
      <!-- <h1>房源</h1> -->
      <mt-tab-container-item id="story-house">
        <div class="app-story-box" v-show="selected==='story-house'">
          <app-story-item v-for="item in showStory" :story="item" :key="item.id"></app-story-item>
        </div>
      </mt-tab-container-item>
      <!-- <h1>景点</h1> -->
      <mt-tab-container-item id="story-scenery">
        <div class="app-story-box" v-show="selected==='story-scenery'">
          <app-story-item v-for="item in showStory" :story="item" :key="item.id"></app-story-item>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  import axios from 'axios'
  import AppStoryItem from './AppStoryItem'
  import { Indicator } from 'mint-ui'
  export default {
    name: 'app-story-content',
    data () {
      return {
        value: '',
        active: true,
        selected: 'story-food',
        stories: []
      }
    },
    components: {
      AppStoryItem
    },
    computed: {
      showStory () {
        let arr = []
        this.stories.forEach((item) => {
          if (item.type === this.selected) {
            arr.push(item)
          }
        })
        return arr
      }
    },
    beforeCreate () {
      console.log('asfb')
      Indicator.open({
        text: '哈吉美妈系带',
        spinnerType: 'triple-bounce'
      })
    },
    created () {
      axios.get('/api/story/stories')
        .then(res => {
          this.stories = res.data.data
          Indicator.close()
          // console.log(res.data.data)
        })
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