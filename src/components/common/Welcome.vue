<template>
  <div class="welcome">
    精彩即将呈现
  </div>
</template>

<script>
  export default {
    name: 'welcome'
  }
</script>

<style>
  .welcome{
    width: 100%;
    height: 100%;
    background: #fff;
    position: fixed;
    z-index: 99999;
    text-align: center;
    padding-top: 50%;
    font-size: 24px;
    background: url(/static/imgs/loading.gif) #66CEFF no-repeat center;
    color: #fff;
  }
</style>
