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
    <mt-loadmore :top-method="loadTop" ref="loadmore" :bottom-all-loaded="allLoaded" topLoadingText="转啊转~">
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
    </mt-loadmore>

  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import AppStoryItem from './AppStoryItem'
  import { Indicator, Loadmore, Toast } from 'mint-ui'

  Vue.component(Loadmore.name, Loadmore)

  export default {
    name: 'app-story-content',
    data () {
      return {
        value: '',
        active: true,
        selected: 'story-food',
        stories: [],
        allLoaded: false
      }
    },
    methods: {
      loadTop () {
        // 加载更多数据
        // console.log('hi loadmore')
        this.getData()
        // this.allLoaded = false
        setTimeout(() => {
          // 暂时翻转数组模拟刷新数据
          this.stories.reverse()
          this.$refs.loadmore.onTopLoaded()
        }, 1000)
      },
      getData () {
        axios.get('/api/story/stories')
          .then(res => {
            // this.stories = this.stories.concat(res.data.data)
            if (this.stories.length) { return }
            this.stories = res.data.data
            Indicator.close()
              // this.allLoaded = true
            // console.log(res.data.data)
          })
          .catch(res => {
            Indicator.close()
            Toast({
              message: '请求超时！',
              duration: 1000
            })
          })
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
      Indicator.open({
        text: '正在加载...',
        spinnerType: 'triple-bounce'
      })
    },
    created () {
      this.getData()
    }
  }
</script>

<style lang="scss">
  .app-story-content{
    flex: 1;
    display: flex;
    flex-direction: column;

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
    .mint-loadmore{
      overflow: auto;
      height: 100%;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .mint-loadmore-content{
      height: 100%;
    }
  }
</style>