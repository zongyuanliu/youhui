<template>
    <div class="content">
        <div class="content-left">
            <ul>
                <li
                    @click="selectCate(item.id)"
                    :class="{active:currentIndex==item.id}"
                    v-for="(item, index) in booklist"
                    :key="index"
                >{{item.name}}</li>
            </ul>
        </div>
        <div class="content-right"> 
            <div>
                <img class="titlt-top" v-lazy="cateProduct.imgurl"/>
                <ul class="content-cate">
                    <li v-for="(cateList, index) in cateProduct.allProductList" :key="index">
                        <span class="content-title">{{cateList.title}}</span>
                            <div class="content-details">
                                <div class="content-c" v-for="(product, index) in cateList.productList" :key="index">
                                    <img v-lazy="product.imgurl"/>
                                    <p>{{product.title}}</p>
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <loading ref="load"/>   -->
    </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import { getBookLeft } from "@/api/index.js";
import { getBookImg } from "@/api/index.js";
import axios from "axios";
// import loading from "./loading"
export default {
    data() {
        return {
            booklist: [],
            currentIndex: 1,
            bookimg: {},
            cateProduct: {},
            bsright: null
        };
    },
    components: {
        // loading
    },
    created() {},
    methods: {
        selectCate(id) {
            this.currentIndex = id;
            axios.get("/bookimg?id=" + id).then(response => {
                this.cateProduct = response;
                this.$nextTick(()=> {
                    this.bsright.refresh()
                })
            })
            .catch(function(error) {
                window.console.log(error);
            });
        }
    },
    async mounted() {
        // this.$refs.load.showLoading(); 
        this.booklist = await getBookLeft();
        
        this.$nextTick(() => {
            // this.$refs.load.hideLoading();
            new BScroll(".content-left", {
                pullUpLoad: true,
                wheel: true,
                scrollbar: true,
                click: true
            })
            
            this.bsright = new BScroll(".content-right", {
                pullUpLoad: true,
                wheel: true,
                scrollbar: true,
                click: true
            })
        });
        this.cateProduct = await getBookImg();
    }
};
</script>
<style scoped>
.content-left {
    height: 100%;
    width: 74px;
    background: #f3f3f3;
    color: rgb(131, 133, 133);
    font-size: 14px;
}
.content-left li {
    height: 47px;
    width: 74px;
    text-align: center;
    line-height: 47px;
}
.active {
    background: white;
    color: pink;
    font-size: 15px;
}
.content-right {
    width: 290px;
    height: 100%;
    margin: 5px auto 0;
}
.titlt-top {
    width: 290px;
    height: 120px;
}
.content-cate {
    padding-top: 10px;
}
.content-title {
    width: 100%;
    height: 20px;
    font-size: 15px;
    font-weight: bold;
    display: block;
}
.content-details {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-center;
    align-items: center;
    justify-content: space-around;
    text-align: center;
}
.content-c {
    width: 80px;
    height: 100px;
    margin: 5px auto 5px;
}
.content-c > img {
    width: 80px;
    height: 80px;
}
.content-c > p {
    font-size: 14px;
}
</style>