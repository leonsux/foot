<template>
  <div class="tab-bar">
    <ul>
      <router-link :key="item.id" :class="{'activeBar': activeBar == item.id ? true : false}"  v-for="item in bars" tag="li" :to="{name: item.name}">
        <div @click="activeBar=item.id">
          <i :class="item.ico"></i>
          <span>{{item.info}}</span>
        </div>
        
      </router-link>
    </ul>
  </div>
</template>

<script>
  
  export default {
    name: 'app-tab-bar',
    data () {
      return {
        bars: [
          {info: '浏览', name: 'AppBrowse', ico: 'iconfont icon-jiaoyin1', id: 0},
          {info: '故事', name: 'AppStory', ico: 'iconfont icon-icon9', id: 1},
          {info: '收藏', name: 'AppFavorite', ico: 'iconfont icon-wujiaoxingkong', id: 2},
          {info: '消息', name: 'AppMessage', ico: 'fa fa-bell-o', id: 3},
          {info: '我的', name: 'AppMine', ico: 'iconfont icon-profile', id: 4}
        ],
        activeBar: -1
      }
    }
  }
</script>

<style lang="scss" >
.tab-bar{
  // position: absolute;
  // bottom: 0;
  // left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 -1px 2px #ccc;
  > ul{
  
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    > li{
      > div{
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100%;
        border: 0;
        > i{
          font-size: 20px;
        }
      }
    }
  }
  .activeBar, .router-link-exact-active{
    color: red;
  }
}
</style>