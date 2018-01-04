<template>
  <div class="tab-bar">
    <ul>
      <router-link tag="li" :to="{name: 'AppBrowse'}">
        <span>浏览</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppStory'}">
        <span>故事</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppFavorite'}">
        <span>收藏</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppMessage'}">
        <span>消息</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppMine'}">
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  
  export default {
    name: 'app-tab-bar'
  }
</script>

<style lang="scss" >
.tab-bar{
  // position: fixed;
  // bottom: 0;
  width: 100%;
  height: 50px;
  background: #26A2FF;
  border-top: 2px, #0ff, solid;
  > ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    color: #fff;
    > li{
      // padding: 5px;
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      border: 0;
    }
  }
}
</style>