<template>
  <div class="toast-box app-story-detail">
    <mt-header title="故事详情">
      <router-link to="/appstory" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <!-- <router-link to="/appstory" slot="right">
        <mt-button>链接</mt-button>
      </router-link>
      <router-link to="/appstory" slot="right">
        <mt-button>心愿单</mt-button>
      </router-link> -->
    </mt-header>
    <div class="story-info">
      <div class="story-info-top">
        <div class="story-top-left">
          <img :src="detail.userImg" alt="">
          <div>
            <span>{{detail.userName}}</span>
            <span>{{detail.site}}</span>
          </div>
          <span>昨天</span>
        </div>
        
        <button>关注</button>
      </div>
      <div class="story-info-middle">
        <div class="story-info-imgs">
          <img :src="detail.imgUrl" alt="">
        </div>
        <div class="story-info-txt">
          <h2>{{detail.title}}</h2>
          <p>{{detail.content}}</p>
        </div>
      </div>
      <div class="story-info-bottom"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-story-detail',
    data () {
      return {
        detail: {}
      }
    },
    created () {
      console.log(this.$route)
      this.detail = this.$route.params.detail
    }
  }
</script>

<style lang="scss">
  .app-story-detail{
    .story-info{
      display: flex;
      flex-direction: column;
      .story-info-top{
        display: flex;
        justify-content: space-between;
        .story-top-left{
          flex: 1;
          display: flex;
          > img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          > div{
            display: flex;
            flex-direction: column;
          }
        }
      }
      .story-info-middle{
        .story-info-imgs{
          > img{
            width: 100%;
          }
        }
      }
    }
  }
</style>
