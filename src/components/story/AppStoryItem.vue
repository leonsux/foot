<template>
  <div class="app-box app-story-item">
    <div class="story-item-content">
      <img @click.stop="toDetail" :src="story.imgUrl" alt="">
      <div class="story-preview">
        <div @click.stop="toDetail">
          <b class="story-site">{{story.site}}</b>
          <b>{{story.title}}</b>
        </div>
        <div class="story-item-control">
          <img class="user-img" :src="story.userImg" alt="">
          <i @click="toastIt" class="fa fa-commenting-o">{{story.commentnum}}</i>
          <b @click="likeIt=!likeIt"><i class="fa fa-thumbs-o-up" :style="{color: likeIt ? 'red' : ''}"></i>{{Number(story.thrumbnum) + (likeIt?1:0)}}</b>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    name: 'app-story-item',
    props: ['story'],
    methods: {
      toDetail () {
        this.$router.push({
          path: 'appstory',
          name: 'AppStoryDetail',
          params: {
            detail: this.story
          }
        })
      },
      toastIt () {
        Toast({
          message: '成为大会员才能评论哦~',
          duration: 1500
        })
      }
    },
    data () {
      return {
        likeIt: false
      }
    }
  }
</script>

<style lang="scss" scoped>
$dblue: #5FD9CD;
$lyellow: #EAF786;
$lred: #FFB5A1;
$lgreen: #B8FFB8;
$lblue: #B8F4FF;
$lgray: #ddd;

  .app-story-item{
    // width: 1.7rem;
    // height: 1.7rem;
    width: 50%;

    display: inline-block;
    flex-direction: column;
    float: left;
    // border: 1px solid red;
    margin-top: 10px;
    .story-item-content{
      width: 1.68rem;
      // background: #26A2FF;
      margin: 0 auto;
      > img{
        width: 1.73rem;
        height: 1.3rem;
        border-radius: 5px;
      }
      padding: 5px;
      .story-preview{
        padding: 5px;
        text-align: left;
        margin: 0 auto;
        width: 1.68rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .story-site{
          font-size: 16px;
          margin-right: 10px;
        }
      }
      .story-item-control{
        margin-top: 5px;
        font-size: 16px;
        .user-img{
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
    }
    
  }
</style>
