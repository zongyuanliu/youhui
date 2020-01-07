<template>
    <!-- 分类 -->
    <div class="category">
        <ul>
            <li v-for="(item,index) in grouyurl" :key="index">
              <img v-lazy="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import {getCateoryList} from "@/api";
export default {
    data (){
        return {
        grouyurl:[]
        }
    },
    async mounted(){
        this.grouyurl=await getCateoryList();
    }

}
</script>

<style scoped>
.category ul{
    display: flex;
    flex-wrap: wrap;
}
.category ul li{
    width: 20%;
}

</style>