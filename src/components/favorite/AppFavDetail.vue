<template>
  <div class="toast-box app-ty-detail">
    <mt-header :title="detail.type_name">
      <router-link to="/favorite" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="story-info">
      <div class="story-info-middle">
        <div class="story-info-imgs">
          <img :src="detail.collect_img" alt="" :title="detail.type">
        </div>
        <div class="story-info-txt">
          <p>详情</p>
          <p>{{detail.type_detail}}</p>
          <div class="favorite-info">
            <p class="fav-type">{{detail.hourse_type}}</p>
            <p class="fav-price">￥{{detail.price}}</p>
            <p>
              <i v-for="i in getRank" :class="i"></i>
              {{detail.hourse_rank}}
            </p>

          </div>
        </div>
      </div>
    </div>
    <!-- {{detail}} -->
  </div>
</template>

<script>
  export default {
    name: 'app-fav-detail',
    data () {
      return {
        detail: this.$route.params.collect
      }
    }
  }
</script>

<style lang="scss">
</style>