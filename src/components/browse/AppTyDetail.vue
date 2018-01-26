<template>
  <div class="toast-box app-ty-detail">
    <mt-header :title="detail.type_name">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="story-info">
      <div class="story-info-middle">
        <div class="story-info-imgs">
          <img :src="detail.post_img" alt="" :title="detail.type">
        </div>
        <div class="story-info-txt">
          <p>详情</p>
          <p>{{detail.type_detail}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-ty-detail',
    data () {
      return {
        detail: this.$route.params.item
      }
    }
  }
</script>

<style lang="scss">
  .story-info-txt{
    > h2, > p{
      padding: 10px;
    }
  }
  .story-info-imgs{
    > img{
      width: 100%;
    }
  }
</style>