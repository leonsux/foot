<template>
  <div class="app-box app-story-item" @click="toDetail">
    <div class="story-item-content">
      <img :src="story.imgUrl" alt="">
      <div class="story-preview">
        <!-- <i class="fa fa-plus"></i> -->
        <!-- 带你去旅行，去吃饭 -->
        <div>
          <img class="user-img" :src="story.userImg" alt="">
          <b class="story-site">{{story.site}}</b>
          <b>{{story.title}}</b>
        </div>
        <div>
          <i class="fa fa-thumbs-o-up">{{story.thrumbnum}}</i>
          <i class="fa fa-commenting-o">{{story.commentnum}}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
          font-size: 1.2em;
          // color: #fff;
        }
        .user-img{
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
    }
    
  }
</style>
