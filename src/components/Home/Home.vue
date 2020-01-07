<template>
  <div class="home">
    <!-- 搜索框 -->
    <div class="mytop">
      <search></search>
      <lylist></lylist>
    </div>
    <router-view></router-view>
    
  </div>
</template>

<script>
import search from "./components/search";
import lylist from "./components/lylist";

export default {
  data() {
    return {
      // isShowClass: false
    };
  },
  components: {
    search,
    lylist,
  },
  methods: {}
  //滚动事件
  //   mounted() {
  //     window.addEventListener('scroll', ()=> {
  //         window.console.log(document.documentElement.scrollTop)
  //         if(document.documentElement.scrollTop > 0) {
  //             this.isShowClass = true
  //         }else if(document.documentElement.scrollTop <= 0) {
  //             this.isShowClass = false
  //         }
  //     })
  //   },
  //   destroyed() {
  //       window.removeEventListener('scroll')
  //   }
};
</script>



<style scoped>
.home {
  padding-top: 100px;
  background: #f4f4f4;
  font-size: 20px;
  margin-bottom: 50px;
}
.mytop {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  font-size: 0;
  background: #ee0d11;
  z-index: 9999;
  /* overflow: hidden; */
}
</style>