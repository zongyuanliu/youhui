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

