<template>
  <div class="app-box app-browse">
    <app-browse-filter></app-browse-filter>
    <div class="app-browse-content">
      <app-browse-experience></app-browse-experience>

      <app-browse-type></app-browse-type>

      <AppBrowseHouse></AppBrowseHouse>
    </div>

  </div>
</template>

<script>
  import AppBrowseFilter from './AppBrowseFilter'
  import AppBrowseExperience from './AppBrowseExperience'
  import AppBrowseType from './AppBrowseType'
  import AppBrowseHouse from './AppBrowseHouse'

  export default {
    name: 'app-browse',
    components: {
      AppBrowseFilter,
      AppBrowseExperience,
      AppBrowseType,
      AppBrowseHouse
    }
  }
</script>

<style lang="scss">
  .app-browse{
    display: flex;
    flex-direction: column;
    flex: 1;
    
    padding: 0 10px;
    .app-browse-content{
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>