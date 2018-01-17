<template>
  <div class="app-mine-set">
    <div class="personalHeader">
      <i @click="toPersonal()" class="iconfont icon-houtui"></i>
      <span>设置</span>
      <span></span>
    </div>
    <div class="list" :key="item.id" v-for="item in lists">
        <span @click="tohere(item.name)">{{item.title}}</span>
    </div> 
    <button type="submit" @click="exit()">退出</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'app-mine-set',
  data () {
    return {
      lists: [
        {id: 1, title: '账号与安全', name: ''},
        {id: 2, title: '邀请好友', name: 'AppMineSetInvite'},
        {id: 3, title: '帮助与反馈', name: ''},
        {id: 4, title: '关于足迹', name: 'AppMineSetAbout'}
      ]
    }
  },
  methods: {
    ...mapMutations(['setInfo']),
    toPersonal () {
      this.$router.push({name: 'AppMinePersonal'})
    },
    exit () {
      this.setInfo({})
      this.$router.push({name: 'AppMineLogin'})
    },
    tohere (params) {
      this.$router.push({name: params})
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-mine-set{
    width:100%;
    font-size: 16px;
    .personalHeader {
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #FF3D84;
      color:#fff;

      i{
        font-size: 20px;
        padding-right: 10px;
      }

    }
    .list{
        margin: 10px 0;
        height: 50px;
        background: #fff;
        display: flex;
        align-items: center;
        color:#333;
        padding-left: 2%;
    }
    button {
      margin-top: 87.5px;
      width:100%;
      height: 50px;line-height: 50px;
      text-align: center;
      background: #FF3D84;
      font-size: 16px;
      color:#fff;
    }

  }
  
</style>

