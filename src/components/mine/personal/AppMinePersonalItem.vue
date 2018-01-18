<template>
  <div class="app-mine-PersonalItem">
      <div class="list" :key="item.id" v-for="item in lists">
        <i :class="item.icon"></i>
        <span @click="tohere(item.name)">{{item.title}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app-mine-PersonalItem',
  data () {
    return {
      lists: [
        {id: 1, title: '积分', icon: 'iconfont icon-jifen', name: 'AppMinePersonalTS'},
        {id: 2, title: '付款', icon: 'iconfont icon-fukuan', name: 'AppMinePersonalTS'},
        {id: 3, title: '会员中心', icon: 'iconfont icon-huiyuan', name: 'AppMinePersonalTS'},
        {id: 4, title: '评价', icon: 'iconfont icon-jiahao', name: 'AppMinePersonalTS'},
        {id: 5, title: '客服', icon: 'iconfont icon-kefu', name: 'AppMinePersonalCS'}
      ]
    }
  },
  methods: {
    tohere (params) {
      this.$router.push({name: params})
    }
  }

}
</script>

<style lang="scss" scoped>
  .app-mine-PersonalItem{
      .list{
        margin: 10px 0;
        height: 50px;
        background: #fff;
        display: flex;
        align-items: center;
        color:#333;
        i{
            padding: 0 10px;
            font-size: 26px;
        }
        span {
          display: block;
          width:88%;
          height:50px;
          line-height: 50px;
        }
      }
  }
</style>
