<template>
  <div class="toast-box app-filte-time">
    <mt-header title="选择日期">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <!-- <button @click="startTime">起始日期</button>
    <button>结束日期</button> -->
    <div>
      <mt-field label="起始日期" placeholder="请输入" type="date" v-model="startTime"></mt-field>
      <mt-field label="结束日期" placeholder="请输入" type="date" v-model="endTime"></mt-field>
      <mt-button class="set-ok-btn" @click="setDurationOk(startTime, endTime)" type="primary">设置好了</mt-button>
    </div>

    <!-- <mt-datetime-picker
      ref="picker"
      @confirm="handleConfirm"
      type="date"
      :startDate="new Date()"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">
    </mt-datetime-picker> -->
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapMutations } from 'vuex'
  import { DatetimePicker } from 'mint-ui'
  Vue.component(DatetimePicker.name, DatetimePicker)

  export default {
    name: 'app-filte-time',
    data () {
      return {
        startTime: '',
        endTime: ''
      }
    },
    methods: {
      ...mapMutations(['setDuration']),
      setDurationOk (startTime, endTime) {
        this.setDuration({startTime, endTime})
        this.$router.push('/')
      }
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
</style>
