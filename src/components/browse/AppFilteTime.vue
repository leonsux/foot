<template>
  <div class="toast-box app-filte-time">
    <mt-header title="选择日期">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div>
      <mt-field label="起始日期" placeholder="请输入" type="date" v-model="startTime"></mt-field>
      <mt-field label="结束日期" placeholder="请输入" type="date" v-model="endTime"></mt-field>
      <mt-button class="set-ok-btn" @click="setDurationOk(startTime, endTime)" type="primary">设置好了</mt-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapActions, mapMutations } from 'vuex'
  import { DatetimePicker } from 'mint-ui'
  Vue.component(DatetimePicker.name, DatetimePicker)

  export default {
    name: 'app-filte-time',
    data () {
      return {
        startTime: new Date().toString(),
        endTime: new Date().toString()
      }
    },
    methods: {
      ...mapMutations(['setFrom']),
      ...mapActions(['setDuration']),
      setDurationOk (startTime, endTime) {
        this.setDuration({startTime, endTime})
        this.setFrom({startTime, endTime})
        this.$router.replace('/')
      }
    },
    mounted () {
      let date = new Date()
      let month = date.getMonth() + 1
      let day = date.getDate()
      date = date.getFullYear() + '-' + (month < 10 ? '0' : '') + month + (day < 10 ? '-0' : '-') + day
      this.startTime = date
      this.endTime = date
    }
  }
</script>

<style lang="scss">
  .app-filte-time{
    > div{
      text-align: center;
    }
  }
  .set-ok-btn{
    margin: 10px;
  }
  .mint-cell-value{
    position: relative;
    > input{
      background: transparent; 
      opacity: 0.5;
    }
  }
</style>
