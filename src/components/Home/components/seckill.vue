<template>
  <div class="seckill">
    <img src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg" alt />
    <!-- 倒计时 -->
    <div class="countdown">
      <i>{{leftime.hours}}</i>
      <span>时</span>
      <i>{{leftime.minutes}}</i>
      <span>分</span>
      <i>{{leftime.seconds}}</i>
      <span>秒</span>
    </div>
    <!-- 内容 -->
    <div class="count">
      <ul>
        <li v-for="(item,index) in msproduct" :key="index">
          <img v-lazy="item.imgurl" alt />
          <p class="deic">{{item.desc}}</p>
          <p class="yprice">￥{{item.discounts}}</p>
          <p class="price">￥{{item.original}}</p>
        </li>
      </ul>
    </div>
    <div class="pic">
        <img src="../images/count.jpg" alt="">
    </div>
  </div>
</template>


<script>
import TimeDown from "@/utils/time";

import { getMsproduct } from "@/api";
export default {
  data() {
    return {
      leftime: {
        hours: "",
        minutes: "",
        seconds: ""
      },
      msproduct: []
    };
  },
  async created() {
    setInterval(() => {
      this.leftime = TimeDown("2020/1/6 12:00:00");
    }, 1000);
    this.msproduct = await getMsproduct();
  }
};
</script>

<style scoped>
.seckill {
  margin-top: 12px;
  background: white;
}
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
}
.countdown i {
  width: 19px;
  height: 25px;
  background: #000;
  color: white;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  line-height: 25px;
  margin: 0 8px;
}
.countdown i:last-of-type {
  background: #f3344a;
}
.countdown span {
  color: #000;
}

.count {
  margin-top: 10px;
  width: 100%;
  overflow: auto;
}
.count ul {
  display: flex;
  width: 1200px;
}
.count ul li {
  width: 100px;
  padding: 0 10px;
}
.count ul li p{
    font-size: 14px;
}
.deic {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.yprice {
  color: #f3344a;
}
.price {
  color: #bababa;
  text-decoration: line-through;
}
::-webkit-scrollbar {
  height: 0;
  width: 0;
}
.pic{
    width: 100%;
}
</style>