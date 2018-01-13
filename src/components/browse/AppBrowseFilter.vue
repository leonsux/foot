<template>
  <div class="filters">
    <!-- <div class="browse-title">地区搜索</div> -->
    <!-- <mt-header title="地区搜索"></mt-header> -->
    <div class="search-box" >
      <span><i class="search-icon fa fa-search"></i><span>搜索目的地</span></span>
    </div>
    <!--  enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp" -->
    <transition> 
      <div class="filter-tag" :style="{'margin-top': mTop+'px'}" v-show="!isSlide">
        <button @click="toFilteTime" size="small" type="default">所有日期</button>
        <button size="small" type="default">房客</button>
        <button size="small" type="default">筛选条件</button>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app-browse-filter',
    data () {
      return {
        value: '',
        isSlide: false,
        mTop: 10
      }
    },
    methods: {
      toFilterArea () {
        this.$router.push('filter-area')
      },
      toFilteTime () {
        this.$router.push('/AppFilteTime')
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  .filters{
    padding-top: 10px;
    // padding: 10px 10px 20px;
    // box-shadow: 0 1px 1px #ccc;
    .filter-tag{
      margin-top: 10px;
      > button{
        height: 22px;
        line-height: 22px;
        padding: 0 9px;
        background: #f5f5f5;
        border: 1px solid #cccaca;
        border-radius: 5px;
        font-size: 14px;
        color: #666;
      }
    }
  }
</style>