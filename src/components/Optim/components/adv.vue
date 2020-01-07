<template>
  <div class="adv">
    <ul>
      <li v-for="(item,index) in getadv" :key="index">
        <img v-lazy="item" alt />
      </li>
    </ul>
  </div>
</template>


<script>
import {getAdv} from "@/api"
export default {
  created() {
    getAdv().then(data => {
      this.getadv = data.data;
    });
  },
  data() {
    return {
      getadv: []
    };
  }
};
</script>

<style scoped>
.adv ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.adv ul li {
  width: 48%;
  margin: 5px 0;
}
</style>

