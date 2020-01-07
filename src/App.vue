<template>
  <div id="app">
    <navlist></navlist>
    <router-view></router-view>
  </div>
</template>

<script>
import navlist from "@/common/navlist.vue";
export default {
  name: "app",
  components: {
    navlist
  }
};
</script>

<style>
<<<<<<< HEAD
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
=======



 .swiper-pagination-bullets .swiper-pagination-bullet-active{
    background: red;
 }

>>>>>>> b24866ab4fe63f084d469a65e85fc060619353b4
</style>