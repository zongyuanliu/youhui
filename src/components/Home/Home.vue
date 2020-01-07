<template>
<<<<<<< HEAD
  <div class="home">
    <!-- 搜索框 -->
    <div class="mytop">
      <search></search>
      <lylist></lylist>
=======
    <div class="home">
<<<<<<< HEAD
=======
        <!-- 搜索框 -->
        <search/>
>>>>>>> 5d95c2c2df3acdb505aaf27ce1d795d0e56f062a
>>>>>>> b24866ab4fe63f084d469a65e85fc060619353b4
    </div>
    <router-view></router-view>
    
  </div>
</template>
<script>
export default {
    data(){
        return{

<<<<<<< HEAD
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
=======
        }
    },
    components:{
        
    }
}
</script>
<style scoped>
    .home{
        background: #EFF4FA;
    }
>>>>>>> 5d95c2c2df3acdb505aaf27ce1d795d0e56f062a
</style>