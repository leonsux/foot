<template>
  <div class="app-box app-favorite">
    <mt-header title="收藏">
      
    </mt-header>

    <app-favorite-content></app-favorite-content>
  </div>
</template>

<script>
  // import axios from 'axios'
  import AppFavoriteContent from './AppFavoriteContent'
  export default {
    name: 'app-favorite',
    components: {
      AppFavoriteContent
    }
  }
</script>

<style lang="scss">
.app-favorite{
  display: flex;
  flex-direction: column;
}
</style>