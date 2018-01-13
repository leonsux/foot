<template>
  <div class="toast-box app-story-search">
    <mt-header title="搜索">
      <router-link to="/appstory" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    
    <div class="data-list">
      <div class="searchBox">
        <input class="" type="text" v-model="searchKey">
      </div> 
      <div class="hot-site">
        <p>热门目的地</p>
        <ul>
          <li v-for="item in hotSites">
            <img :src="item.imgUrl" alt="" :title="item.name">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="history-search">
        <p>最近搜索</p>
        <ul>
          <li @click="searchKey=item.name" v-for="item in histories">
            {{item.name}}
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
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
          {name: '土耳其'},
          {name: '迈阿密'}
        ]
      }
    }
  }
</script> 

<style lang="scss">
  .searchBox{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px 0;
    height: 30px;
    > input{
      width: 90%;
      padding: 0 10px;
      background: #eee;
      border-radius: 40px;
    }
  }
  .data-list{
    
    p{
      color: #aaa;
      margin-bottom: 20px;
    }
  }
  .hot-site{
    padding: 10px;
    > ul{
      display: flex;
      justify-content: space-around;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        > img{
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  .history-search{
    padding: 10px;
    li{
      padding: 5px;
    }
  }
</style>
