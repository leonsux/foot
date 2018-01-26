<template>
  <div class="app-browse-experience">
    <h1 class="browse-title">体验</h1>
    <div class="experience-content">
      <div @click="toExperiences(item.type)" class="ex-item" v-for="item in experiences" :key="item.id">
        <img :src="item.experience_img" :alt="item.experience_location">
        <span>{{item.type}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import { Indicator, Lazyload, Toast } from 'mint-ui'

  Vue.use(Lazyload, {
    preLoad: 2,
    error: '/static/imgs/loading.gif',
    loading: '/static/imgs/loadImg.gif',
    attempt: 1
  })

  export default {
    name: 'app-browse-experience',
    data () {
      return {
        experiences: [],
        source: null
      }
    },
    methods: {
      getData () {
        axios.get('/api/browse/experience')
        .then(res => {
          this.experiences = res.data.data
          Indicator.close()
        })
        .catch(res => {
          Indicator.close()
          Toast({
            message: '请求超时！',
            duration: 1000
          })
        })
      },
      toExperiences (type) {
        this.$router.push({
          path: '/',
          name: 'AppExperiences',
          params: {type}
        })
      }
    },
    mounted () {
      this.getData()
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
  .browse-title{
    margin: 30px 0 10px 0;
    // margin-top: 50px;
    font-weight: 400;
    color: #333;
    font-size: 18px;
  }
  .app-browse-experience{
    // width: 100%;
    display: flex;
    flex-direction: column;
    // padding: 0 20px;
  }
  .experience-content{
    // width: 100%; 
    display: flex;
    justify-content: space-around;
    // padding: 8px 0 0 0;
    // padding-top: 10px;
    .ex-item{
      display: flex;
      flex-direction: column;
      // width: 25%;  
      align-items: center;
      > img{
        width: 0.83rem;
        height: 0.55rem;
      }
      > span{
        margin-top: 5px;
        color: #666;
      }
    }
  }
</style>