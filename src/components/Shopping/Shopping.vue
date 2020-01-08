<template>
    <div class="shopping">
        <!-- 顶部栏 -->
        <column/>
    </div>
</template>
<script>
//用哪个vue组件就导入哪个
import column from "./components/column.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        column,
    }
}
</script>
<style scoped>
.shopping{
    background: #F3F3F3;
    height: 100%;
}
</style>