<template>
  <div class="tab-bar">
    <ul>
      <router-link :class="{'activeBar': activeBar == item.id ? true : false}"  v-for="item in bars" tag="li" :to="{name: item.name}">
        <i :class="item.ico"></i>
        <span @click="activeBar=item.id">浏览</span>
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
          {name: 'AppBrowse', ico: 'fa fa-bandcamp', id: 0},
          {name: 'AppStory', ico: 'fa fa-tripadvisor', id: 1},
          {name: 'AppFavorite', ico: 'fa fa-heart-o', id: 2},
          {name: 'AppMessage', ico: 'fa fa-send-o', id: 3},
          {name: 'AppMine', ico: 'fa fa-user-o', id: 4}
        ],
        activeBar: 0
      }
    }
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
  // .router-link-exact-active{
  //   color: #26A2FF;
  // }
  .activeBar{
    color: red;
  }
}
</style>