<template>
  <div>
    <!-- 轮播图 -->
    <carasel />

    <!-- 广告 -->
    <adv />

    <!-- 淘宝热卖 -->
    <taoBaoT />

    <!-- 商品 -->
    <commodity />
  </div>
</template>
<script>
import carasel from "./carasel";
import adv from "./adv";
import taoBaoT from "./taoBaoT";
import commodity from "./commodity";
export default {
  components: {
    carasel,
    taoBaoT,
    commodity,
    adv
  }
};
</script>