<template>
  <div class="app-favorite-item">
    <div class="favorite-img" >
      <img v-lazy="collect.hourse_img" alt="" :title="collect.hourse_type">
      <img class="like-ico" src="/static/imgs/like.png" alt="">
      <img class="user-head" :src="collect.owner_img" alt="">
    </div>
    <div class="favorite-info">
      <p class="fav-type">{{collect.hourse_type}}</p>
      <p class="fav-price">￥{{collect.hourse_price}}</p>
      <p>
        <i v-for="i in getRank" :class="i"></i>
        {{collect.hourse_rank}}
      </p>

    </div>
  </div>
</template>

<script>
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
    },
    methods: {
      toFavDetail () {
        let col = this.collect
        this.$router.replace({
          path: '/favorite',
          name: 'AppFavDetail',
          params: {collect: col}
        })
      }
    }
  }
</script>

<style lang="scss">
  // @import '../../styles/app.scss';
  .app-favorite-item{
    margin-top: 10px;
    .favorite-img{
      position: relative;
      > img{
        border-radius: 0;
        width: 100%;
        height: 2.5rem;
      }
      .like-ico{
        width: 30px;
        height: 30px;
        position: absolute;
        right: 10px;
        top: 20px;
      }
      .user-head{
        width: 50px;
        height: 50px;
        position: absolute;
        bottom: 0;
        right: 10px;
        border-radius: 50%;
        transform: translateY(50%)
      }
    }
    .favorite-info{
      padding: 5px 10px 0;
      .fav-type{
        font-size: 16px;
      }
      .fav-rank{
        color: red;
      }
    }

  }
</style>