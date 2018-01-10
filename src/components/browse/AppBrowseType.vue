<template>
  <div class="app-browse-type">
    <!-- <div class="browse-title">民宿类型</div> -->
    <!-- <mt-header title="民宿类型"></mt-header> -->
    <h1 class="browse-title">民宿类型</h1>
    <div class="type-content">
      <div class="ty-item" v-for="item in types">
        <img :src="item.post_img" alt="item.type_name">
        <span>{{item.type_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { Indicator, Toast } from 'mint-ui'
  export default {
    name: 'app-browse-type',
    data () {
      return {
        types: []
      }
    },
    mounted () {
      axios.get('/api/browse/home_type')
        .then(res => {
          this.types = res.data.data
          setTimeout(() => {
            Indicator.close()
          }, 2000)
        })
        .catch(res => {
          Indicator.close()
          Toast({
            message: '请求超时！',
            duration: 1000
          })
        })
    },
    beforeCreate () {
      Indicator.open({
        text: '正在加载...',
        spinnerType: 'triple-bounce'
      })
    }
  }
</script>

<style lang="scss">
  .app-browse-type{
    display: flex;
    flex-direction: column; 
    padding: 20px;
  }
  .type-content{
    text-align: center;
    // overflow-y: auto;
    .ty-item{
      display: inline-block;
      width: 40%;
      margin: 5% 5% 0 5%;
      > img{
        width: 100%;
        height: 1rem;
        margin-bottom: 5px;
      }
    }
  }
</style>