<template>
  <div class="app-favorite-item">
    <div class="favorite-img">
      <img :src="collect.collect_img" alt="">
    </div>
    <div class="favorite-info">
      <p class="fav-type">{{collect.hourse_type}}</p>
      <p class="fav-price">￥{{collect.price}}</p>
      <p>
        <i v-for="i in getRank" :class="i"></i>
        {{collect.hourse_rank}}
      </p>

    </div>
  </div>
</template>

<script>
  // import axios from 'axios'

  export default {
    name: 'app-favorite-item',
    props: ['collect'],
    computed: {
      getRank () {
        let rank = []
        let hrank = this.collect.hourse_rank
        for (let i = 1; i <= 5; i++) {
          if (i <= hrank) {
            rank.push('fav-rank fa fa-star')
          } else {
            rank.push('fav-rank fa fa-star-o')
          }
        }
        if (hrank !== parseInt(hrank)) {
          rank[Math.floor(hrank)] = 'fav-rank fa fa-star-half-o'
        }
        return rank
      }
    }
  }
</script>

<style lang="scss">
  .app-favorite-item{
    padding: 10px;
    .favorite-img{
      > img{
        width: 100%;
        height: 2.2rem;
      }
    }
    .favorite-info{
      padding: 10px;
      .fav-type{
        font-size: 16px;
      }
      .fav-rank{
        color: #FFB5A1;
      }
    }
  }
</style>