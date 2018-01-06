<template>
  <div class="filters">
    <!-- <div class="browse-title">地区搜索</div> -->
    <!-- <mt-header title="地区搜索"></mt-header> -->
    <div class="search-box">
      <span><i class="search-icon fa fa-search"></i><span>带你去旅行</span></span>
    </div>
    <!--  enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp" -->
    <transition> 
      <div class="filter-tag" :style="{'margin-top': mTop+'px'}" v-show="!isSlide">
        <mt-button size="small" type="default">所有日期</mt-button>
        <mt-button size="small" type="default">房客</mt-button>
        <mt-button size="small" type="default">筛选条件</mt-button>
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
    mounted () {
      /*
      function GetSlideDirection (startX, startY, endX, endY) {
        var dy = startY - endY
        let result = 0
        if (dy > 0) {
          result = 1
        } else {
          result = 2
        }
        return result
      }
      var startX, startY
      document.addEventListener('touchstart', ev => {
        // startX = ev.touches[0].pageX
        startY = ev.touches[0].pageY
      }, false)

      document.addEventListener('touchmove', ev => {
        // var disX = ev.touches[0].pageX
        var disY = ev.touches[0].pageY
        this.mTop += disY - startY
        if (disY - startY >= 0) {
          this.isSlide = false
        } else if (startY - disY >= 50) {
          this.isSlide = true
        }
        if (this.mTop > 10 || this.mTop < 0) {
          this.mTop = 10
        }
        console.log(startY - disY)
      }, false)

      document.addEventListener('touchend', ev => {
        // var dir = ''
        var endX = ev.changedTouches[0].pageX
        var endY = ev.changedTouches[0].pageY
        // var direction = GetSlideDirection(startX, startY, endX, endY)
        /*
        switch (direction) {
          case 0:
            break
          case 1:
            // dir = 'up'
            this.isSlide = true
            break
          case 2:
            // dir = 'down'
            this.isSlide = false
            break
        }
      }, false)  */
    }
  }
</script>

<style lang="scss">
  .filters{
    padding: 20px;
    box-shadow: 0 1px 1px #ccc;
    .filter-tag{
      margin-top: 10px;
    }
  }
</style>