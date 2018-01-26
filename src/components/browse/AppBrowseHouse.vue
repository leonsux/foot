<template>
  <div class="app-box app-browse-house">
    <h1 class="browse-title">房源</h1>
    <div>
      <AppBrowseHouseItem v-for="item in vuex_hourses.length?vuex_hourses:houses" :collect="item" :key="item.id"></AppBrowseHouseItem>
    </div>
  </div>
</template>

<script>
  import AppBrowseHouseItem from './AppBrowseHouseItem'
  import axios from 'axios'

  import { mapState } from 'vuex'

  export default {
    name: 'app-browse',
    data () {
      return {
        houses: ''
      }
    },
    computed: {
      ...mapState(['duration', 'search_keyword', 'vuex_hourses'])
    },
    components: {
      AppBrowseHouseItem
    },
    methods: {
      getHouse () {
        axios.get('/api/browse/hoursesearch.php')
        .then(res => {
          setTimeout(() => {
            this.houses = eval('(' + res.data + ')').data
            this.loading = false
          }, 500)
        })
        .catch(res => {
        })
      }
    },
    mounted () {
      this.getHouse()
    }
  }
</script>

<style lang="scss">

</style>