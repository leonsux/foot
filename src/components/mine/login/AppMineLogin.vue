<template>
  <div class="app-mine-login">
    <app-mine-login-header></app-mine-login-header>
    <app-mine-login-box></app-mine-login-box>
  </div>
</template>

<script>
import AppMineLoginHeader from './AppMineLoginHeader'
import AppMineLoginBox from './AppMineLoginBox'
export default {
  name: 'app-mine-login',
  components: {
    AppMineLoginHeader,
    AppMineLoginBox
  }
}
</script>

<style lang="scss" scoped>

</style>
