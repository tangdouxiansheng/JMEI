<template>
    <div class="shopping">
        <div class="z_nav">
            <i class="fa fa-angle-left" aria-hidden="true" @click="z_back"></i>
            <span>购物车</span>
            <i class="fa fa-home" aria-hidden="true" @click="z_home"></i>
            <!-- <button @click="ooo">ooo</button> -->
        </div>
        <ul v-if="shop.goods.length !== 0 && name" class="list">
			<li v-for="(item,index) in shop.goods" :key="index" class="row">
                <input type="checkbox" v-model="item.check">
                <img :src="item.img"/>
                <div class="center">
                    <h3>{{item.name}}</h3>
                    <p>￥{{item.jumei_price}}</p>
                    <button @click="dec(item.id)" class="num">-</button>
                    {{item.number}}
                    <button @click="inc(item.id)" class="num">+</button>
                    <button @click="del(item.id)" class="delone">删除</button>
                </div>
            </li>
            <div class="all">
                <input type="checkbox" v-model="checkall">全选
                <div>总数量: {{number}} 应付: {{money}} 元</div>
                <button @click="del(shop.goods)" :style="{float:'right'}">清空购物车</button>
            </div>
        </ul>
        <div class="z_body" v-else>
            <img src="./../assets/oops.png">
            <p>您的购物车中没有商品，请先去挑选心爱的商品吧！</p>
            <button @click="z_home">去逛逛</button>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from "vuex"
export default {
    data(){
        return{
            name:""
        }
    },
    created(){
        this.name = localStorage.getItem("name")
    },
    computed:{
        ...mapState(["shop","goods"]),
        ...mapGetters(["money","number"]),
        checkall:{
            set(value){
                this.shop.goods.forEach((item)=>item.check = value)
            },
            get(){
                return this.shop.goods.filter((prop)=>prop.check).length===this.shop.goods.length
            }
        },
    },
    methods:{
        ...mapMutations(["add","inc","dec","del"]),
        z_back(){
            this.$router.go(-1)
        },
        z_home(){
            this.$router.push("/")
        },
        // ooo(){
        //     console.log(this.shop.goods)
        // }
    }
}
</script>

<style scoped>
    .shopping{display:flex;flex-direction:column;height:12.182rem;}

    .z_nav{padding:0 0.255rem;height:0.818rem;line-height:0.818rem;border-bottom:1px solid #eee;text-align:center;}
    .z_nav .fa{font-size:0.327rem;line-height:0.818rem;}
    .z_nav .fa-angle-left{float:left;}
    .z_nav .fa-home{float:right;}
    .z_nav span{color:#333;font-size:0.309rem;}

    .z_body{display:flex;flex-direction:column;flex:1;justify-content:center;}
    .z_body img{width:1.709rem;height:1.636rem;margin:0 auto;}
    .z_body p{margin-top:0.309rem;text-align:center;}
    .z_body button{width:2.509rem;height:0.727rem;text-align:center;margin:0.473rem auto;background:#fe4070;color:#fff;font-size:0.273rem;border-radius:0.364rem;border:0}

    .list li{padding:0.182rem;display:flex;background:#eee;}
    .list li input{float:left;margin-top:5px;}
    .list li img{width:150px;height:110px;margin:0 10px;}
    .list li .center{color:#333;margin-top:5px;font-size:15px;width:210px;}
    .list li .center p{color:#fe4070;font-size:13px;margin:5px 0;}
    .list li .center .num{width:25px;}
    .list li .center .delone{width:40px;float:right;}
    .list .all{padding:0.182rem;background:burlywood;position:fixed;bottom:55px;width:96%;font-size:18px;}
    .list .all input{width:40px;height:20px;}
    .list .all div{margin-left:23px;display:inline-block;line-height:30px;}
    .list .all button{height:30px;color:red;border-radius:20px;border:0;font-size:16px;display:block;width:100%;}
</style>
