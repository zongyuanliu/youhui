<template>
  <swiper :options="swiperOption" v-if="swiperSlides.length>0">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getCateList} from "@/api"
  export default {
    name: 'carrousel',
    created(){
           getCateList().then((data)=>{
           this.swiperSlides=data.data
           })
    },

    data() {
      return {
        swiperSlides:[],
        swiperOption: {
          autoplay:true,
         loop : true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    mounted() {
   
    }
  }
</script>