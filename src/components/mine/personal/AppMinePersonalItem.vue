<template>
  <div class="app-min-PersonalItem">
      <div class="list" :key="item.id" v-for="item in lists">
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app-min-PersonalItem',
  data () {
    return {
      lists: [
        {id: 1, title: '积分', icon: 'iconfont icon-jifen'},
        {id: 2, title: '付款', icon: 'iconfont icon-fukuan'},
        {id: 3, title: '会员中心', icon: 'iconfont icon-huiyuan'},
        {id: 4, title: '评价', icon: 'iconfont icon-jiahao'},
        {id: 5, title: '客服', icon: 'iconfont icon-kefu'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-min-PersonalItem{
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
      }
  }
</style>
