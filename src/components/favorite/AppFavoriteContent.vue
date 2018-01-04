<template>
  <div class="app-favorite-content">
    <app-favorite-item v-for="item in collections" :collect="item" :key="item.id"></app-favorite-item>
  </div>
</template>

<script>
  import axios from 'axios'
  import AppFavoriteItem from './AppFavoriteItem'
  export default {
    name: 'app-favorite-content',
    components: {
      AppFavoriteItem
    },
    data () {
      return {
        collections: []
      }
    },
    created () {
      axios.get('/api/collect/collections')
        .then(res => {
          this.collections = res.data.data
          console.log(this.collections)
        })
    }
  }
</script>

<style lang="scss">
  .app-favorite-content{
    overflow-y: auto;
    height: 100%;
  }
  .app-favorite-content::-webkit-scrollbar {
    display: none;
  }
</style>