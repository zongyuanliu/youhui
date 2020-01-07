<template>
  <div class="dress">
    <!-- 轮播图 -->
    <swiper :options="swiperOption" v-if="swiperSlides.length>0">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img src="../images/dresscar1.jpg" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- 分类 -->
    <category></category>

    <!-- 内容 -->
    <div class="count">
      <ul>
        <li v-for="(item,index) in 6" :key="index">
          <img src="../images/dr1.jpg" alt />
          <div class="txt">
            <ul>
              <li>
                <img src="../images/dr2.jpg" alt />
                <p class="price">￥498 <span>3699</span></p>
                <p class="dric">svip <span>￥391.2</span> </p>
              </li>
              <li>
                <img src="../images/dr3.jpg" alt />
                <p class="price">￥609 <span>3399</span></p>
                <p class="dric">svip <span>￥578.55</span> </p>
              </li>
              <li>
                <img src="../images/dr4.jpg" alt />
                <p class="price">￥799 <span>3499</span></p>
                <p class="dric">svip <span>￥759.05</span> </p>
              </li>
            </ul>
          </div>
          <p class="bot">满199减40 满299减70 满499减120 <span>剩余2天</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import category from "./category";
export default {
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [
        "../images/dresscar1.jpg",
        "../images/dresscar2.jpg",
        "../images/dresscar3.jpg",
        "../images/dresscar4.jpg"
      ]
    };
  },
  mounted() {
    this.swiperSlides = [
      "../images/dresscar1.jpg",
      "../images/dresscar2.jpg",
      "../images/dresscar3.jpg",
      "../images/dresscar4.jpg"
    ];
  },
  components: {
    category
  }
};
</script>

<style scoped>
.dress {
  width: 100%;
}
.count{
   margin-top: 15px;
  width: 100%;
}
.count ul li{
  margin: 0 auto;
  width: 93%;
  border-radius: 5px;
  background: white;
}
.count ul li img{
  width: 100%;
}
.count ul li .txt ul{
  width: 100%;
  display: flex;
  justify-content:space-around;
}
.count ul li .txt ul li{
  width: 33.3333%;
}
.count ul li .txt ul li p.price{
  font-size: 16px;
  color: rgb(199, 1, 1);
}
.count ul li .txt ul li p.price span{
  font-size: 14px;
  color: #bababa;
  text-decoration: line-through;
}

.count ul li .txt ul li p.dric{
  font-size: 16px;
  color: rgb(199, 1, 1);
}
.count ul li .txt ul li p.dric span{
  font-size: 16px;
  color: #141414;

}
.count ul li p.bot{
  margin: 10px 0px;
  border-top: 1px solid #e7e7e7;
  font-size: 14px;
  padding-left: 10px;
  height: 36px;
  line-height: 36px;
  color: rgba(248, 9, 1, 0.972);
}
.count ul li p.bot span{
  margin-left: 50px;
}
</style>