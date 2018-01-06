<template>
  <div class="tab-bar">
    <ul>
      <router-link tag="li" :to="{name: 'AppBrowse'}">
        <i class="fa fa-bandcamp"></i>
        <span>浏览</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppStory'}">
        <i class="fa fa-tripadvisor"></i>
        <span>故事</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppFavorite'}">
        <i class="fa fa-heart-o"></i>
        <span>收藏</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppMessage'}">
        <i class="fa fa-send-o"></i>
        <span>消息</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppMine'}">
        <i class="fa fa-user-o"></i>
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
  // &:before{
  //   content: "";
  //   display: block;
  //   height: 1px;
  //   background: red;

  // }
  // position: fixed;
  // bottom: 0;
  width: 100%;
  height: 50px;
  // background: #26A2FF;
  // border-top: 2px #0ff solid;
  box-shadow: 0 -1px 2px #ccc;
  > ul{
  
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    // color: #fff;
    > li{
      // padding: 5px;
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 100%;
      border: 0;
    }
  }
  .router-link-exact-active{
    color: #26A2FF;
  }
}
</style>