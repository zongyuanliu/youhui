<<<<<<< HEAD
import axios from "axios"
axios.defaults.baseURL = 'http://localhost:8080/jk/';
//轮播图接口
export function getCateList() {
    return axios.get("banner")
}
// 导航文字
export function getAearcilk() {
    return axios.get("navlist")
}
// 四张图片
export function getAdv() {
    return axios.get("optim")
}
// 五个图片
export function getTao() {
    return axios.get("optlist")
}
// 商品
export function getCommo() {
    return axios.get("optimg")
}
=======
import axios from "axios";
<<<<<<< HEAD

    //axios有一个公告地址配置 中转服务器到本地地址
axios.defaults.baseURL = 'http://localhost:8080/jk/';

//接口
export function getCateList(){
    return axios.get("")
}
=======
//轮播图接口
axios.defaults.baseURL = "http://127.0.0.1:8080/jk/"

axios.interceptors.response.use(function (response) {
    return response.data;
},function (error){
    return Promise.reject(error)
});

export function getCateList(){
    return axios.get("banner")
}

export function getBookLeft() {
    return axios.get("booklist")
}

export function getBookImg(id=1) {
    return axios.get("bookimg", {
        params: {
            id
        }
    })
}

//获取导航文字

export function getNavlist(){
    return axios.get("navlist")
}

//获取分类
export function getCateoryList(){
    return axios.get("categoryList")
}

//获取秒杀商品信息
export function getMsproduct(){
   return axios.get("msproduct")
}

// 获取为你推荐
export function getRecommend(){
  return axios.get("recommend")
}
//获取精选

export function getChoiceness(){
  return axios.get("choiceness")
}
>>>>>>> 7b4f2728555797e76d608b22ca7de0543df556f0
>>>>>>> b24866ab4fe63f084d469a65e85fc060619353b4
