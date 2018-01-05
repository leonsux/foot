<template>
  <div class="filters">
    <!-- <div class="browse-title">地区搜索</div> -->
    <!-- <mt-header title="地区搜索"></mt-header> -->
    <div class="filter-search">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
    </div>
    <div class="filter-tag">
      <mt-button type="default">所有日期</mt-button>
      <mt-button type="default">房客</mt-button>
      <mt-button type="default">筛选条件</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-browse-filter',
    data () {
      return {
        value: ''
      }
    }
  }
</script>

<style lang="scss">
  .filters{
    display: flex;
    flex-direction: column;
  }
</style>