<template>
  <div class="taoBaoT">
    <ul>
      <li v-for="(item,index) in gettao" :key="index">
        <img v-lazy="item.imgurl" alt="">
        <i>{{item.desc}}</i>
      </li>
    </ul>
      <div class="nav">
    <ul>
      <li class="item"><a href="#">综合</a> </li>
      <li><a href="#">销售</a></li>
      <li><a href="#">价格^</a></li>
      <li><a href="#">有卷</a></li>
    </ul>
  </div>
  </div>
  <!-- 小导航 -->
</template>
<script>
import {getTao} from "@/api"
export default {
   created() {
    getTao().then(data => {
      this. gettao= data.data;
    });
  },
  data() {
    return {
      gettao: []
    };
  }

};
</script>


<style scoped>
.taoBaoT {
  text-align: center;
}
.taoBaoT ul {
  display: flex;
  justify-content: space-around;
}

.taoBaoT ul li img {
  width: 60px;
  height: 50px;
}

.nav{
    width: 100%;
    height: 50px;
    margin: 10px 0;
    line-height: 50px;
}
.nav ul .item{
    color: red;
}

.nav ul li:hover a{
    color: red;
}
</style>