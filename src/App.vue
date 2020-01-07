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
<style>
#app{
  height: 100%;
}
 .swiper-pagination-bullets .swiper-pagination-bullet{
   float: right;
    width: 8px;
    height: 24px;
    transform:rotate(45deg);
    border-radius: 0;
  }
</style>