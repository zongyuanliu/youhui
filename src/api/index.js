import axios from "axios";

    //axios有一个公告地址配置 中转服务器到本地地址
axios.defaults.baseURL = 'http://localhost:8080/jk/';

//接口
export function getCateList(){
    return axios.get("")
}