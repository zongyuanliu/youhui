<template>
  <!-- 为你推荐 -->
  <div class="recom">
    <h3>为你推荐</h3>
    <div class="count">
      <ul>
        <li>
          <span>爆款推荐</span>
          <p>销售之星 好评如潮</p>
          <img
            src="http://img.alicdn.com/img/i2/15838344/O1CN012ASCfM2BVbKhXmBxG_!!0-saturn_solar.jpg_210x210.jpg"
            alt
          />
        </li>
        <li>
          <span>优惠视频</span>
          <p>精彩好货 随心看购</p>
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577793409913&di=c52db2e2297039fe2565c1693aadeaed&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171219%2Fcaa149b5336c4a2cba23c823c7a7b838.jpeg"
            alt
          />
        </li>
        <li>
          <span>潮鞋上新</span>
          <p>时尚有型精品</p>
          <img
            src="http://img.alicdn.com/img/i2/117561498/O1CN01yY9xRu1Mw7rIFJKaR_!!0-saturn_solar.jpg_210x210.jpg"
            alt
          />
        </li>
      </ul>
    </div>
    <div class="cented">
      <ul>
        <li v-for="(item,index) in reclist" :key="index">
          <div class="txt">
            <p>{{item.desc}} ></p>
            <span>{{item.ppds}}</span>
          </div>
          <img v-lazy="item.imgurl" alt />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getRecommend } from "@/api";

export default {
  data() {
    return {
      reclist: []
    };
  },
  async mounted() {
    this.reclist = await getRecommend();
  }
};
</script>


<style scoped>
.recom {
  margin-top: 5px;
}
.recom h3 {
  padding-left: 10px;
  color: black;
  line-height: 33px;
}
.count ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.count ul li {
  width: 116px;
  height: 135px;
  background: rgb(255, 139, 139);
  border-radius: 6px;
  text-align: center;
  color: rgb(255, 7, 7);
}
.count ul li:nth-child(2) {
  background: rgb(255, 249, 164);
  color: rgb(253, 187, 5);
}
.count ul li:nth-child(3) {
  background: rgb(212, 168, 253);
  color: rgb(132, 4, 252);
}
.count ul li span {
  font-size: 16px;
  font-weight: bolder;
}
.count ul li p {
  font-size: 12px;
}
.count ul li img {
  width: 80px;
  height: 75px;
  padding: 5px 18px;
}
.cented {
  width: 100%;
  margin-top: 8px;
}
.cented ul {
  margin: 0 auto;
  width: 96%;
  border-radius: 2%;
  display: flex;
  flex-wrap: wrap;
  background: white;
}
.cented ul li {
  width: 50%;
  height: 86px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(230, 228, 228);
  border-right: 1px solid rgb(230, 228, 228);
}
.cented ul li:nth-child(1) .txt span{
   color: red;
}
.cented ul li:nth-child(2) .txt span{
   color: rgb(112, 3, 255);
}
.cented ul li:nth-child(5){
    border-bottom: none;
}
.cented ul li:nth-child(6){
    border-bottom: none;
}
.cented ul li .txt {
  margin-right: 4px;
}
.cented ul li .txt p {
  font-size: 16px;
  font-weight: bolder;
  color: black;
}
.cented ul li .txt span {
  font-size: 12px;
}
.cented ul li img {
  width: 75px;
  height: 75px;
}
</style>
