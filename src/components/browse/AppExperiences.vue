<template>
  <div class="toast-box app-experiences">
    <mt-header title="体验">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="type-content ex-con">
      <div @click="toExDetail(item)" class="ty-item" v-for="item in list">
        <img :src="item.experience_img" title="item.experiences_location">
        <span>{{item.experiences_location}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'app-experiences',
  data () {
    return {
      type: this.$route.params.type,
      list: []
    }
  },
  computed: {
    ...mapState(['toExType'])
  },
  methods: {
    toExDetail (item) {
      this.$router.push({
        path: '/appexperiences',
        name: 'AppExDetail',
        params: {item}
      })
    },
    getDate () {
      axios.get('/api/browse/experiencelist')
      .then((res) => {
        res.data.data.forEach((item) => {
          if (item.type === this.type) {
            this.list.push(item)
          }
        })
      })
      .catch((res) => {
        console.log('fail')
      })
    }
  },
  mounted () {
    this.getDate()
  }
}
</script>

<style lang="scss">
  .ex-con{
    margin-top: 10px;
    padding: 0 10px;
  }
</style>
