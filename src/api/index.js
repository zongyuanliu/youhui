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