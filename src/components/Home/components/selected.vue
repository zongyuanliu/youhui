<template>
  <!-- 精选好货 -->
  <div class="selected">
    <img src="../images/select.jpg" alt />
    <div class="count">
      <ul>
        <li v-for="(item,index) in selList" :key="index">
          <img v-lazy="item.imgurl" alt />
          <span>{{item.desc}}</span>
          <p>{{item.sale}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getChoiceness } from "@/api";

export default {
  data() {
    return {
      selList: []
    };
  },
  async mounted() {
    this.selList = await getChoiceness();
  }
};
</script>

<style scoped>
.selected {
  margin-top: 10px;
  width: 100%;
}
.selected img {
  width: 100%;
}
.count ul {
  width: 100%;
}
.count ul li {
  background: white;
  width: 100%;
  margin-bottom: 10px;
}
.count ul li img {
  width: 100%;
}
.count ul li span {
  padding-left: 10px;
  font-size: 16px;
  font-weight: bolder;
  color: black;
}
.count ul li p {
  font-size: 16px;
  color: rgb(192, 19, 19);
  padding-left: 10px;
  padding-bottom: 8px;
}
</style>