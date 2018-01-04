<template>
  <div class="app-box app-story-write">
    <i class="fa fa-plus"></i>
    我要写故事
  </div>
</template>

<script>
  export default {
    name: 'app-story-write'
  }
</script>

<style lang="scss">
  .app-story-write{
    position: absolute;
    width: 100px;
    height: 40px;
    background: #0ff;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    text-align:center;
    line-height: 40px;
    border-radius: 20px;
  }
</style>
