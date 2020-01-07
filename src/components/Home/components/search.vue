<template>
  <!-- 搜索框 -->
  <div class="search">
    <img class="left-img" src="../images/sao.png" alt />
    <div class="input">
      <img src="../images/search.png" alt />
      <input type="text" placeholder="请输入商品名称搜索商品" />
    </div>
    <img class="right-img" src="../images/xiaoxi.png" alt />
  </div>
</template>

<script>
// import { getNavlist } from "@/api";
export default {
  data() {
    return {};
  }
};
</script>




<style scoped>
.left-img {
  width: 30px;
  height: 30px;
  padding: 10px;
}
.right-img {
  width: 26px;
  height: 26px;
  padding: 10px;
}
.search > .input > img {
  width: 26px;
  height: 26px;
  margin: 0 10px;
}
.search {
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #ee0d11;
  
}
.search .input {
  width: 100%;
  height: 35px;
  background: #ffffff;
  display: flex;
  flex: 1;
  border-radius: 16px;
  align-items: center;
}
.search .input > input {
  flex: 1;
  height: 100%;
  background: transparent;
  outline: none;
}


/* ::-webkit-scrollbar {
  height: 0;
  width: 0;
} */
</style>
