//只有一函数

/*
时间倒计时插件
TimeDown.js
*/
export default function TimeDown(endDateStr) {
    //结束时间
    var endDate = new Date(endDateStr);
    //当前时间
    var nowDate = new Date();
    //相差的总秒数
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    //输出到页面
    if(hours<10){
        hours ='0'+hours
    }
    if(minutes<10){
        minutes ='0'+minutes
    }
    if(seconds<10){
        seconds ='0'+seconds
    }


    return {
        days,
        hours,
        minutes,
        seconds
    }
   
    
}