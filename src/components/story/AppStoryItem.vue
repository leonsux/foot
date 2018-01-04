<template>
  <div class="app-box app-story-item">
    <div class="story-item-content">
      <img :src="story.imgUrl" alt="">
      <div class="story-preview">
        <!-- <i class="fa fa-plus"></i> -->
        <!-- 带你去旅行，去吃饭 -->
        <div>
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
    props: ['story']
  }
</script>

<style lang="scss">
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
    // margin: 0.05rem;
    .story-item-content{
      width: 1.68rem;
      // background: #26A2FF;
      margin: 0 auto;
      > img{
        width: 1.68rem;
        height: 1.68rem;
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
      }
    }
    
  }
</style>
