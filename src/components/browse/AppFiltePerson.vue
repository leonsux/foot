<template>
  <div class="toast-box app-filte-person">
    <mt-header title="选择房客类型">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <ul class="app-person-box">
      <li>
        <span>成人</span>
        <div>
          <i class="cacu-btn fa fa-minus"></i>
          <span>1</span>
          <i class="cacu-btn fa fa-plus"></i>
        </div>
      </li>
      <li>
        <span>儿童</span>
        <div>
          <i class="cacu-btn fa fa-minus"></i>
          <span>0</span>
          <i class="cacu-btn fa fa-plus"></i>
        </div>
      </li>
      <li>
        <span>婴幼儿</span>
        <div>
          <i class="cacu-btn fa fa-minus"></i>
          <span>0</span>
          <i class="cacu-btn fa fa-plus"></i>
        </div>
      </li>
      <li>
        <span>宠物</span>
        <div>
          <mt-switch></mt-switch>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app-filte-person',
    data () {
      return {
        startTime: '',
        endTime: ''
      }
    }
  }
</script>

<style lang="scss">
  .app-person-box{
    border-top: 1px solid #ccc;
    padding: 0 10px;
    > li{
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
    }
  }
  .cacu-btn{
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #98FB98;
    border-radius: 50%;
    color: #98FB98;
  }
</style>
