<template>
  <div class="app-mine-personalMsg">
    <i><img src="/static/imgs/img.jpg" alt=""/></i>
    <span>{{userMsg.userTel}}</span>
  </div>  
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app-mine-personalMsg',
  computed: mapState(['userMsg'])
}
</script>

<style lang="scss" scoped>
  .app-mine-personalMsg {
      height: 80px;
      margin: 10px 0;
      background: #fff;
      display: flex;
      align-items: center;
      i{
        display: block;
        width:60px;
        height: 60px;
        padding: 0 20px;
        border-radius: 50%;
        img{
          width:100%;
          height:100%;
        }
        
      }
  }
</style>
