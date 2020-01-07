<template>
  <div class="aearcilk">
    <!--分类 -->
    <ul>
      <!-- <router-link tag="li" to="/optim/sport" v-for="(item,index) in cilk" :key="index">
        {{item.name}}
      </router-link> -->

       <router-link tag="li" to="/optim/odefault">
            推荐
        </router-link>
        <router-link tag="li" to="/optim/sport">
           运动
        </router-link>
           <router-link tag="li" to="/optim/costume">
            服饰
        </router-link>
         <router-link tag="li" to="/optim/sport">
            鞋包
        </router-link>
        <router-link tag="li" to="/optim/odefault">
           钟表
        </router-link>
           <router-link tag="li" to="/optim/sport">
            美妆
        </router-link>
             <router-link tag="li" to="/optim/sport">
            生活
        </router-link>
        <router-link tag="li" to="/optim/odefault">
           数码
        </router-link>
           <router-link tag="li" to="/optim/sport">
            母婴
        </router-link>
    
    </ul>

    <div class="right">
      <img class="right-img" src="../images/cate.png" alt />
    </div>
  </div>
</template>


<script>
import {getAearcilk} from "@/api"
export default {
      created(){
           getAearcilk().then((data)=>{
           this.cilk=data.data
           })
    },
    data(){
      return{
        cilk:[]
      }
    }
}
</script>>
<style scoped>
.aearcilk {
 /* position: relative; */
  margin-top: 45px;
  text-align: center;
  width: 100%;
  overflow-x: auto;
}
.aearcilk ul {
  display: flex;
  width: 700px;
}
.aearcilk .right {
    width: 50px;
    height: 40px;
  background: white;
  position: absolute;
  /* position: fixed; */
  top: 60px;
  right: 0px;
  /* z-index: 9999; */
}
.aearcilk .right .right-img {
  width: 30px;
  height: 30px;
}
ul li {
  padding: 15px 0px;
  display: block;
  width: 70px;
  height: 30px;
  line-height: 30px;
}

ul li:hover{
  color: red;
}
.aearcilk ul li:hover li {
  color: #e98982;
}
::-webkit-scrollbar{
  height: 0;
  width: 0;
}
</style>