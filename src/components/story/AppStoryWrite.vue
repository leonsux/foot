<template>
  <div @click="toWrite" class="app-box app-story-write">
    <i class="fa fa-edit"></i>
    写故事
  </div>
</template>

<script>
  export default {
    name: 'app-story-write',
    methods: {
      toWrite () {
        this.$router.push('/appwriting')
      }
    }
  }
</script>

<style lang="scss">
  .app-story-write{
    position: absolute;
    width: 100px;
    // width: 40px;
    height: 40px;
    background: #fff;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    text-align:center;
    line-height: 40px;
    // border-radius: 20px;
    border-radius: 50px;
    // font-size: 2em;
    border: 1px solid #ccc;
    box-shadow: 0 1px 1px #ccc;
  }
</style>
