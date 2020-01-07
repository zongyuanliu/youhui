<template>
    <ul class="nav">
        <router-link tag="li" to="/home">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link tag="li" to="/category">
            <i class="iconfont icon-fenlei"></i>
            <span>分类</span>
        </router-link>
        <router-link tag="li" to="/optim">
            <i class="iconfont icon-baobao"></i>
            <span>优选</span>
        </router-link>
        <router-link tag="li" to="/shopping">
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
        </router-link>
        <router-link tag="li" to="/mine">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
        </router-link>
    </ul>
</template>
<style scoped>
@import url("./css/fonts.css");
    .nav{
        position: fixed;
        bottom: 0;
        left:0;
        display: flex;
        width: 100%;
        border-top:1px solid #e0e0e0; 
        background: #fff;
        z-index: 9999;
    }
    .nav li{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0;
    }
    .nav li i {
        font-size: 24px;
        height: 32px;
    }
    .nav li span{
        font-size: 12px;
    }
    .router-link-active{
        color:red;
    }
</style>
