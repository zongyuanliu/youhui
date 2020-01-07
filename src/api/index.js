import axios from "axios";
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
