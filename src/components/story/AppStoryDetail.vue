<template>
  <div class="toast-box app-story-detail">
    <mt-header title="">
      <router-link to="/appstory" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>

      <router-link to="/appstory" slot="right">
        <mt-button><i class="fa fa-share-alt"></i></mt-button>
        
      </router-link>
      <router-link style="margin-left: 10px;" to="/appstory" slot="right">
        <i class="fa fa-heart-o"></i>
      </router-link>
    </mt-header>
    <div class="story-info">
      <div class="story-info-top">
        <div class="story-top-left">
          <img :src="detail.userImg" alt="">
          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <span style="color:#666;">{{detail.userName}}</span>
            <p>
              <span style="color: #666;">{{detail.site}}</span>
              <span style="color: #999;">昨天</span>
            </p>
          </div>
        </div>
        
        <mt-button style="background: #ff3d84;" @click="changeMind" :type="!likeHe ? 'danger' : 'default'" size="small"><i :class="!likeHe ? 'fa fa-plus' : 'fa fa-check'"></i>&nbsp;{{likeHe ? '取关' : '关注'}}</mt-button>
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
        height: 75px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .story-top-left{
          flex: 1;
          display: flex;
          > img{
            width: 50px;
            height: 50px;
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
        padding: 0 10px;
        .story-info-imgs{
          > img{
            width: 100%;
          }
        }
        .story-info-txt{
          color: #333;
          > h2{
            font-size: 16px;
            margin: 10px 5px 5px;
          }
          > p{
            padding: 10px;
          }
        }
      }
    }
  }
</style>
