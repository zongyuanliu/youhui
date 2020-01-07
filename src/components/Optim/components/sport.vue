<template>
  <div>
    <div class="nav">
      <ul>
        <li class="item">
          <a href="#">综合</a>
        </li>
        <li>
          <a href="#">销售</a>
        </li>
        <li>
          <a href="#">价格^</a>
        </li>
        <li>
          <a href="#">有卷</a>
        </li>
      </ul>
    </div>
    <!-- 商品 -->
    <commodity />
  </div>
</template>

<script>
import commodity from "./commodity";
export default {
  components: {
    commodity
  }
};
</script>

<style scoped>
.nav{

    
    width: 100%;
    height: 35px;
    line-height: 30px;
}
.nav ul{
        display: flex;
    flex-direction: row;
      justify-content: space-around;
}
.nav ul .item{

    color: red;
}

.nav ul li:hover a{
    color: red;
}

</style>