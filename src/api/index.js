import axios from "axios";
<<<<<<< HEAD

//axios有一个公公地址配置 中转服务器到本地地址
axios.defaults.baseURL = 'http://localhost:8080/jk/';

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // 对相应错误做点什么
    return Promise.reject(error);
  });
  

=======
>>>>>>> 5d95c2c2df3acdb505aaf27ce1d795d0e56f062a
//轮播图接口
export function getCateList(){
    return axios.get("banner")
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
