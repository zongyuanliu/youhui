<template>
  <div>
    <!-- 搜索 -->
    <search />

    <!-- 分类 -->
    <searcilk />

    <router-view></router-view>
    

  </div>
</template>

<script>
import search from "./components/search";
import searcilk from "./components/searcilk";

export default {
  data() {
    return {};
  },
  components: {
    search,
    searcilk,
  }
};
</script>



<style scoped>
 .search{
   width: 100%;
  position: fixed;
  top: 0px;
  left: 0;
}


</style>