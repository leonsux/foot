<template>
  <div class="filters">
    <!-- <div class="browse-title">地区搜索</div> -->
    <!-- <mt-header title="地区搜索"></mt-header> -->
    <div class="search-box" @click="toFilteSearch">
      <span><i class="search-icon fa fa-search"></i><span>搜索目的地</span></span>
    </div>
    <!--  enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp" -->
    <transition> 
      <div class="filter-tag" :style="{'margin-top': mTop+'px'}" v-show="!isSlide">
        <button :class="{'selectedTag': durationToStr === '所有日期' ? false : true}" @click="toFilteTime" size="small" type="default">{{durationToStr}}</button>
        <button :class="{'selectedTag': personsToStr.str === '房客' ? false : true}" size="small" type="default"  @click="toFiltePerson(personsToStr.persons)">{{personsToStr.str}}</button>
        <!-- <button size="small" type="default">筛选条件</button> -->
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app-browse-filter',
    data () {
      return {
        value: '',
        isSlide: false,
        mTop: 10
      }
    },
    computed: {
      ...mapGetters(['durationToStr', 'personsToStr'])
    },
    methods: {
      toFilterArea () {
        this.$router.push('filter-area')
      },
      toFilteTime () {
        this.$router.push('/AppFilteTime')
      },
      toFiltePerson (persons) {
        this.$router.push({
          path: '/',
          name: 'AppFiltePerson',
          params: persons
        })
      },
      toFilteSearch () {
        this.$router.push('/AppFilteSearch')
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  .filters{
    padding-top: 10px;
    .filter-tag{
      margin-top: 10px;
      > button{
        height: 26px;
        line-height: 22px;
        padding: 0 9px;
        background: #f5f5f5;
        border: 1px solid #cccaca;
        border-radius: 5px;
        font-size: 14px;
        color: #666;
      }
      .selectedTag{
        background: #98FB98;
        color: #fff;
      }
    }
  }
</style>