<template>
  <div 
    class="app-favorite-content"
    
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
    <app-favorite-item v-for="item in collections" :collect="item" :key="item.id"></app-favorite-item>
  </div>
</template>

<script>
  import axios from 'axios'
  import AppFavoriteItem from './AppFavoriteItem'
  import { Indicator, Toast } from 'mint-ui'

  export default {
    name: 'app-favorite-content',
    components: {
      AppFavoriteItem
    },
    data () {
      return {
        collections: [],
        loading: false
      }
    },
    beforeCreate () {
      Indicator.open({
        text: '正在加载...',
        spinnerType: 'triple-bounce'
      })
    },
    methods: {
      getFav () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        })
        axios.get('/api/collect/collections')
          .then(res => {
            setTimeout(() => {
              this.collections = this.collections.concat(res.data.data)
              this.loading = false
              Indicator.close()
            }, 500)
          })
          .catch(res => {
            Indicator.close()
            Toast({
              message: '请求超时！',
              duration: 1000
            })
          })
      },
      loadMore () {
        // Indicator.open()
        this.loading = true
        this.getFav()
      }
    },
    mounted () {
      this.getFav()
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