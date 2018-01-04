<template>
  <div class="app-box app-browse">
    <app-browse-filter></app-browse-filter>

    <app-browse-experience></app-browse-experience>

    <app-browse-type></app-browse-type>
  </div>
</template>

<script>
  import AppBrowseFilter from './AppBrowseFilter'
  import AppBrowseExperience from './AppBrowseExperience'
  import AppBrowseType from './AppBrowseType'

  export default {
    name: 'app-browse',
    components: {
      AppBrowseFilter,
      AppBrowseExperience,
      AppBrowseType
    }
  }
</script>

<style lang="scss">
  .app-browse{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .browse-title{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height:50px;
  }
</style>