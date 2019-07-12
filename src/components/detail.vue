<template>
    <div>
        <div class="z_nav">
            <i class="fa fa-angle-left" aria-hidden="true" @click="z_back"></i>
            <span>{{name}}</span>
            <i class="fa fa-home" aria-hidden="true" @click="z_home"></i>
        </div> 
        <img :src="list.img" class = "detail_img"/>
        <div class = "detail_mainNew">
            <p>
                <span class = "detail_mainNew_price">￥{{list.jumei_price}}</span>
                <span class = "detail_mainNew_oldPrice">￥{{list.market_price}}</span>
                <span class = "detail_mainNew_text">{{list.buyer_number}}人已购买</span>
            </p>
        </div>
        <div class = "detail_fiexd_bottom">
            <a href="http://h5.jumei.com/s/store/4022.html?fp=goods_detail" class = "detail_shop">
                <i class="fa fa-university" aria-hidden="true"></i>
                店铺
            </a>
            <router-link to="/index/shopping" class = "detail_shopCat">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                购物车
            </router-link>
            <router-link to="/index/shopping" class = "detail_nowshop">立即购买</router-link>
            <p class = "detail_addshop" @click="addshop({...list,name,id,number:1,check:true})">加入购物车</p>
            <!-- <router-link to="/index/shopping" class = "detail_addshop">加入购物车</router-link> -->
        </div>
    </div>
</template>


<script>
    import {mapMutations} from "vuex"
    import { Button } from 'mint-ui';
    export default {
        data(){
            return {
                list:[],
                name:"",
                id:0
            }
        },
        created(){
           this.getData()
        },
        methods:{
            ...mapMutations(["addshop"]),
            z_back(){
                this.$router.go(-1)
            },
            z_home(){
                this.$router.push("/")
            },
            getData(){
                this.id = this.$route.params.id;
                this.$axios.get('/body/product/ajaxDynamicDetail?',{
                    params:{
                        item_id:this.id,
                        type:"global_deal"
                    }
                }
                ).then((res)=>{
                    this.list = res.data.data.result;
                    // console.log(this.list)
                });
                this.$axios.get('/body/product/ajaxStaticDetail?',{
                    params:{
                        item_id:this.id,
                        type:"global_deal"
                    }
                }
                ).then((res)=>{
                    this.name = res.data.data.short_name;
                })
            }
        }
    }
</script>

<style scoped>
    .z_nav{padding:0 0.255rem;height:0.818rem;line-height:0.818rem;border-bottom:1px solid #eee;text-align:center;}
    .z_nav .fa{font-size:0.327rem;line-height:0.818rem;}
    .z_nav .fa-angle-left{float:left;}
    .z_nav .fa-home{float:right;}
    .z_nav span{color:#333;font-size:0.309rem;}


    .detail_mainNew_price{font-size:28px;color:#f33873;}
    .detail_mainNew_oldPrice{font-size:13px;color:#666;text-decoration: line-through;}
    .detail_mainNew_text{font-size:13px;color:#666;float:right;margin-top:10px;margin-right:10px;}

    .detail_img{width:375px;height:375px;}
    .detail_fiexd_bottom{width:375px;height:50px;position: fixed;bottom:0;}
    .detail_nowshop{display:block;width:127px;height:49.5px;line-height:49.5px;color:#fff;
                    text-align: center;background:#fc4070;float:right;font-size:14px;}
    .detail_addshop{display:block;width:127px;height:49.5px;line-height:49.5px;color:#fe4070;
                    text-align: center;background:#fff1f6;float:right;font-size:14px;}
    .detail_shop{width:57px;height:50px;display:flex;flex-direction: column;float:left;
                text-align:center;line-height:20px;margin-top:8px;color:#979797;}
    .detail_shopCat{width:57px;height:50px;display:flex;flex-direction: column;float:left;
                    text-align:center;line-height:20px;margin-top:8px;color:#979797;}
    .detail_fiexd_bottom .fa{font-size:20px;}
</style>


