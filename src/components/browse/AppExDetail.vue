<template>
  <div class="toast-box app-ex-detail">
    <mt-header :title="detail.type">
      <router-link to="/Appexperiences" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="story-info">
      <div class="story-info-middle">
        <div class="story-info-imgs">
          <img :src="detail.experience_img" alt="" :title="detail.type">
        </div>
        <div class="story-info-txt">
          <h2>{{detail.experiences_location}}</h2>
          <p>详情</p>
          <p>{{detail.info}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-ex-detail',
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