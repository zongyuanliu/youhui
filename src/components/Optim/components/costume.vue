<template>

  <div class="commodity">
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
    <ul>
      <li v-for="(item,index) in getcommo" :key="index">
        <img :src="item.imgurl" alt />
        <span>{{item.title}}</span>
        <div class="commodity-t">
          <span>爆款</span>
          <i>{{item.discounts}}</i>
          <b>{{item.desc}}</b>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCommo } from "@/api";
export default {
  created() {
    getCommo().then(data => {
      this.getcommo = data.data;
    });
  },
  data() {
    return {
      getcommo: []
    };
  }
};
</script>
<style scoped>
.commodity{
  background: #f1f1f1;
}
.commodity ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.commodity ul li {
  text-align: center;
  background: #fff;
  width: 45%;
  margin: 5px 5px;
}
.commodity ul li span{
  margin: 0 auto;
  text-align: center;
}
.commodity ul li img {
 margin: 0 auto;
  width: 160px;
  height: 130px;
}
.commodity ul li > span {
  text-align: center;
  font-size: 14px;
  width: 140px;
  height: 38px;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.commodity-t > span {
  color: #ff5500;
}

.commodity-t > i {
  color: #ff5500;
  font-size: 16px;
  margin: 0 3px;
}
.commodity-t > b {
  font-size: 10px;
  color: #9e9a9a;
  font-weight: normal;
}
.nav{
    background: #fff;
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

.nav ul li{
    width: 40px;
    

}
.nav ul li:hover a{
    color: red;
}
</style>