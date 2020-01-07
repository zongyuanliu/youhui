<template>
  <!-- 搜索框下的分类 -->
  <div class="lylist">
    <div class="bt-le">
      <ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange" />
      <!-- 所有的二级路由组件统一在router/index.js里注册，这里只需要写上router-view就可以进行展示了 -->
      <!-- 在router/index.js里注册的组件统一在router-view里面进行展示 -->
      <!-- <router-view /> -->
    </div>
    <div class="bt-ri">
      <img src="../images/caidan.png" alt />
    </div>
  </div>
</template>

<script>
// import
export default {
  data() {
    return {
      selectedId: 0, //代表选中的id，为0，一开始进入页面就显示数组的第0位啊
      items: [
        { label: "推荐" },
        { label: "运动" },
        { label: "鞋包" },
        { label: "母婴" },
        { label: "百货" },
        { label: "数码" },
        { label: "生活" },
        { label: "食品" },
        { label: "内衣" },
        { label: "男装" },
        { label: "电器" }
      ], //所要展示的东西，但要以对象的形式传入
      options: {
        activeColor: "#fff" //设置选中颜色
      },
      // 二级路由路径
      subRouteUrl: [
        "/home/hot",
        "/home/dress",
        // "/home/box",
        // "/home/mbaby",
        // "/home/general",
        // "/home/food",
        // "/home/shirt",
        // "/home/man",
        // "/home/ele"
      ]
    };
  },
  methods: {
    // ly-tab组件的绑定事件函数
    handleChange(item, index) {
      // console.log(item,index)        index为一个下标，通过定义的数组，取出对应下标的路由地址进行跳转
      // console.log(this.$router)
      //跳转到指定的路径this.$router.replace()
      // this.$router.replace('/me')        例如  这样就可以跳转到/me页面，就是个人中心页面
      this.$router.replace(this.subRouteUrl[index]);
      // console.log(this.$route);
    }
  },
  created() {
    // console.log(this.$router)
  }
};
</script>


<style scoped>
.lylist {
  width: 100%;
  background: #ee0d11;
  display: flex;
}
.lylist .bt-le {
  width: 85%;
  height: 45px;
  color: #888;
}
.ly-tab-item-label span {
  color: rgb(5, 5, 5);
}
.ly-tab-list {
  padding: 10px;
}

.lylist .bt-ri {
  margin: 0 5px 0 8px;
  width: 35px;
  /* height: 35px; */
}
.lylist .bt-ri img {
  margin: 6px;
  width: 25px;
  height: 25px;
}
</style>