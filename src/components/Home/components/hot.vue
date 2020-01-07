<template>
  <!--  推荐组件 -->
  <div class="hot">
    <!-- 轮播图 -->
    <carasel></carasel>

    <!-- 分类 -->
    <category></category>

    <!-- 今日秒杀 -->
    <seckill></seckill>

    <!-- 为你推荐 -->
    <recom></recom>

    <!-- 精选商品 -->
    <selected></selected>
  </div>
</template>
<script>

import carasel from "./carasel";
import category from "./category";
import seckill from "./seckill";
import recom from "./recom";
import selected from "./selected";
export default {
  components: {
    carasel,
    category,
    seckill,
    recom,
    selected
  }
};
</script>