<template>
    <div class="category">
        <!-- 搜索栏 -->
        <search/>
        <!-- 内容 -->
        <contents/>
    </div>
</template>
<script>
    import search from "./components/search"
    import contents from "./components/content"
    export default {
        name:'category',
        components:{
            search,
            contents
        }
    }
</script>
<style scoped>
    .category {
        height: 100%;
    }
    .content {
        display: flex;
        height: calc(100% - 107px);
    }
    .content-left {
        height: 100%;
        width: 74px;
    }
    .content-right {
        height: 100%;
        width: 280px;
    }
</style>