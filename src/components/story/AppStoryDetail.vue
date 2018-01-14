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
          </div>
            <span style="color: #5FD9CD"><i class="fa fa-map-marker"></i>{{detail.site}}</span>
          <!-- <span>昨天</span> -->
        </div>
        
        <mt-button @click="changeMind" :type="!likeHe ? 'danger' : 'default'" size="small"><i :class="!likeHe ? 'fa fa-plus' : 'fa fa-check'"></i>&nbsp;{{likeHe ? '取关' : '关注'}}</mt-button>
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
  import { MessageBox } from 'mint-ui'
  export default {
    name: 'app-story-detail',
    data () {
      return {
        detail: {},
        likeHe: false
      }
    },
    methods: {
      changeMind () {
        if (this.likeHe) {
          MessageBox.confirm('不喜欢TA了吗?', '')
          .then(res => {
            this.likeHe = !this.likeHe
          }).catch(() => {
          })
        } else {
          this.likeHe = !this.likeHe
        }
      }
    },
    created () {
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
        padding: 5px 10px;
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
            margin: 0 5px;
            font-size: 16px;
          }
        }
      }
      .story-info-middle{
        .story-info-imgs{
          > img{
            width: 100%;
          }
        }
        .story-info-txt{
          > h2, > p{
            padding: 10px;
          }
        }
      }
    }
  }
</style>
