<template>
  <div class="app-mine-set">
    <!-- <div class="personalHeader">
      <i @click="toPersonal()" class="iconfont icon-houtui"></i>
      <span>设置</span>
      <span></span>
    </div> -->
    <mt-header title="设置">
      <router-link to="/personal" slot="left">
        <i class="iconfont icon-houtui"></i>
      </router-link>
    </mt-header>
    <div class="list" :key="item.id" v-for="item in lists">
        <span @click="item.id===2 ?toToast() :tohere(item.name) ">{{item.title}}</span>
    </div> 
    <button type="submit" @click="exit()">退出</button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapMutations } from 'vuex'
export default {
  name: 'app-mine-set',
  data () {
    return {
      lists: [
        {id: 1, title: '邀请好友', name: 'AppMineSetInvite'},
        {id: 2, title: '帮助与反馈', name: 'AppMinePersonalTS'},
        {id: 3, title: '关于足迹', name: 'AppMineSetAbout'}
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
    },
    toToast () {
      Toast({
        message: '网络有点拥挤，稍后再来试试~',
        duration: 2000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-mine-set{
    width:100%;
    font-size: 16px;
    .mint-header{
      background-color: #ff3d84;
      color:#fff;
      font-size: 16px;
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
        span {
          display: block;
          width:98%;
          height:100%;
          line-height: 50px;
        }
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

