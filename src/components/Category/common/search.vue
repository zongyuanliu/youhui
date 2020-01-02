<template>
        <div class="top_search">
            <div class="search">
                <i class="iconfont icon-fangdajing"></i>
                <input type="text" placeholder="运动">
            </div>
            <div class="message">
                <i class="iconfont icon-xiaoxi pictures"></i>
                <p class="content">消息</p>
            </div>
            
        </div>
</template>
<style scoped>
    @import url("../../../common/css/iconfont.css");
    .top_search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    .search {
        display: flex;
        flex: 1;
        background: #EEEEEE;
        height: 36px;
        border-radius: 20px;
        align-items: center;
    }
    .search>i {
        font-size: 18px;
        padding:0 10px 0 18px;
    }
    .search>input {
        flex: 1;
        height: 100%;
        font-size: 15px;
        background: transparent;
    }
    .message {
        width: 40px;
        text-align: center;
    }
    .message>i{
        font-size: 20px;
        line-height: 1;
        color: black;
    }
    .message .content {
        line-height: 1;
        vertical-align: middle;
    }
</style>