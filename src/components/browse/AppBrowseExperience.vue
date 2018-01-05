<template>
  <div class="app-browse-experience">
    <h1 class="browse-title">体验</h1>
    <div class="experience-content">
      <div class="ex-item" v-for="item in experiences" :key="item.id">
        <img :src="item.experience_img" :alt="item.experience_location">
        <span>{{item.type}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { Indicator } from 'mint-ui'
  export default {
    name: 'app-browse-experience',
    data () {
      return {
        experiences: []
      }
    },
    mounted () {
      axios.get('/api/browse/experience')
        .then(res => {
          this.experiences = res.data.data
          Indicator.close()
        })
    },
    beforeCreate () {
      console.log('asfb')
      Indicator.open({
        text: '哈吉美妈系带',
        spinnerType: 'triple-bounce'
      })
    }
  }
</script>

<style lang="scss">
  .browse-title{
    margin: 10px;
    margin-top: 50px;
    font-weight: 400;
  }
  .app-browse-experience{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .experience-content{
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 8px 0 0 0;
    .ex-item{
      display: flex;
      flex-direction: column;
      width: 25%;
      align-items: center;
      > img{
        width: 0.8rem;
        height: 0.8rem;
      }
      > span{
        margin-top: 5px;
      }
    }
  }
</style>