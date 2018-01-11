<template>
  <div class="app-box app-mine">
    
    <!-- 我的 -->
    <router-view/>
  </div>
</template>

<script>
  import AppMineLogin from './login/AppMineLogin'
  // import AppMineRegister from './register/AppMineRegister'
  // import AppMinePersonal from './personal/AppMinePersonal'
  export default {
    name: 'app-mine',
    components: {
      AppMineLogin
    }
  }
</script>

<style lang="scss">
  .app-mine{
    display: flex;
    height: 100%;
    flex-direction: column;
    .lapp-mine-content{
      height: 100%;
    }

  }
</style>