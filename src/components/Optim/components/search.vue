<template>
<div class="search">
      <i>淘宝优选</i>
    <div class="input">
      <img src="../images/search.png" alt="">
      <input type="text" placeholder="请输入商品名称或粘贴淘宝名">
    </div>
 
    
</div> 

</template>


<style scoped>

i{  
    margin-left: 10px;
    margin-right: 5px;
    margin-top: 5px;
    width: 40px;
    height: 40px;
    display: block;
    font-size: 14px;
    color: red;
    font-weight:bold
}
/* .left-img{
    width: 40px;
    height: 30px;
    padding: 10px;
} */

.right-img{
    width: 30px;
    height: 30px;
padding: 10px;
}
.search>.input>img{
    width: 20px;
    height: 20px;
    margin: 0 10px;
    
}


.search{
    display: flex;
    /*position: absolute; */
    justify-content: space-between;
    align-items: center;
    background: white;
    position: relative;
    z-index: 100;
}

.search .input{
    margin-right: 5px;
    margin-top: 10px;
    height: 35px;
    background: #e8ecf0;
    display: flex;
    flex: 1;
    border-radius: 16px;
    align-items: center;
}
.search .input>input{
    flex: 1;
    height: 100%;
    background: transparent;
}




/* 实验 */


</style>