<template>
  <div class="app-box app-story-write">
    <i class="fa fa-edit"></i>
    写故事
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
    // width: 40px;
    height: 40px;
    background: #26A2FF;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    text-align:center;
    line-height: 40px;
    // border-radius: 20px;
    border-radius: 50px;
    // font-size: 2em;
    border: 1px solid #ccc;
    box-shadow: 0 1px 1px #ccc;
    opacity: 0.9;
  }
</style>
