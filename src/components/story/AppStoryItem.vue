<template>
  <div class="app-box app-story-item">

    <img src="https://upload.jianshu.io/users/upload_avatars/3629578/d80d6cf5-d91b-4409-8561-f1dd2b95f1ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" alt="">
    <div>
      <!-- <i class="fa fa-plus"></i> -->
      带你去旅行，去吃饭
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-story-item'
  }
</script>

<style lang="scss">
  .app-story-item{
    // width: 1.7rem;
    // height: 1.7rem;
    width: 50%;

    display: inline-block;
    flex-direction: column;
    float: left;
    // border: 1px solid red;
    // margin: 0.05rem;
    > img{
      width: 90%;
      height: 90%;
    }
  }
</style>
