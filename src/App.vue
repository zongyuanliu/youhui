<template>
  <div id="app">
    <navlist></navlist>
    <router-view></router-view>
  </div>
</template>

<script>
import navlist from "@/common/navlist.vue"
export default {
  name: 'app',
  components: {
    navlist
  }
}
</script>
<style scoped>
  #app{
    height: 100%;
  }
</style>