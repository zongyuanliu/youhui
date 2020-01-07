<template>
  <!-- 轮播图 -->
  <!-- 解决loop -->
  <swiper :options="swiperOption" v-if="swiperSlides.length>0">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img v-lazy="slide" alt />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>


<script>
//轮播图数据
import { getCateList } from "@/api";

export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: []
    };
  },
  async mounted() {
    this.swiperSlides = await getCateList();
  }
};
</script>

<style scoped>

.swiper-slide img {
  margin: 0 auto;
  width: 96%;
  height: 130px;
  border-radius: 16px;
}
.swiper-container {
  background: #ee0d11;
}
</style>