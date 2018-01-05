<template>
  <div class="app-register">
    <AppRegisterHeader></AppRegisterHeader>
    <AppRegisterBox></AppRegisterBox>
  </div>
</template>

<script>
import AppRegisterHeader from './AppRegisterHeader'
import AppRegisterBox from './AppRegisterBox'
export default {
  name: 'app-register',
  components: {
    AppRegisterHeader,
    AppRegisterBox
  }
}
</script>

<style lang="scss">

</style>
