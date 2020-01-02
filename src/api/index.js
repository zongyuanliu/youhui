import axios from "axios";
//轮播图接口
export function getCateList(){
    return axios.get("http://192.168.1.37:3000/jk/banner")
}