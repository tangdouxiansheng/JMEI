<template>
    <div class="box" >
            <div class="box_title">
                <div class="title">
                    <ul>
                        <li v-for="(item,index) in list" :key="index">
                           <span @click="getData(item.type,index)" :class="{'title-color':item ===list[number] ? !bool:bool}">{{item.title}}</span></li>
                    </ul>
                </div>
            </div>
            <div class="box_empty"></div>
            <div class="box_body">
                <ul>
                        <li v-for="(item,index) in data" :key="index">
                            <!-- 路由传参 -->
                            <router-link :to="'/assDetail/'+item.item_id">  
                                <div class="box-container">
                                <div class="people-number">{{item.buyer_number_text}}</div>
                                <div class="goods-topsmall"><img :src="item.image" alt=""></div> 
                                <div class="goods-middle"><span class="goods-num">{{item.group_name_tag}}</span>{{item.short_name}}</div>
                                <div class="goods-foot">
                                    <div class="price-left">
                                        <span class="ct-price">{{item.jumei_price}}</span>
                                        <span class="jm-price">{{item.single_price}}</span>
                                    </div>
                                    <div class="goods-foot-btn">去开团</div>
                                </div>
                                </div>
                            </router-link>
                        </li>
                </ul>
            </div>
        <router-view/>
    </div> 
    
</template>
<script>
export default {
    data(){
        return{
            list:[
                {title:'推荐',type:'coutuan_home'},
                {title:'美妆',type:'coutuan_makeup'},
                {title:'母婴健康',type:'coutuan_baby'},
                {title:'饰品配饰',type:'coutuan_jewellery'},
                {title:'礼品箱包',type:'coutuan_bag'},
                {title:'家居',type:'coutuan_furniture'},
                {title:'食品保健',type:'coutuan_food'},
                {title:'数码家电',type:'coutuan_3c'},
                {title:'内衣',type:'coutuan_underwear'},
                {title:'女装',type:'coutuan_ladies'},
                {title:'鞋类',type:'coutuan_shose'},
                {title:'下期预告',type:'coutuan_pre'},
            ],
            data:[],
            bool:false,
            number:0,
            page:1,
            loading:false, 
            type:'',
        }
    },
    created(){
        this.getData('coutuan_home',this.number);
    },
    methods:{
        getData(type,index){
            this.number = index;
            this.type = type
            this.$axios.get('/jm/yiqituan/tab_list?',{
                params:{
                    tab:type,
                    page:this.page,
                    per_page:20,
                    k:Date.now()
                }
            }).then((res)=>{
                this.data = res.data.data;
            })
        },
    },
   
}
</script>
<style scoped>
    .box{
        font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
    }
    .box_title{
        width:100%;
        overflow-x: scroll;
        position: fixed;
        background: #fff;
        z-index: 55;
    }
    .title{
        width:17.891rem;
        height:0.91rem;
        line-height: 0.89rem;
        top:0;
        left:0;
        bottom:0;
        right:0;
        padding: 0 0.42rem;
        border-bottom: 0.018rem solid #eee;
    }
    .title ul {
        width:17.891rem;
        display: flex;
        justify-content:space-around;
        font-size:14px;
        color:#666;
    }
    .title ul li span{
        display: inline-block;
    }
    .box_body ul li{
        border-bottom: 0.145rem solid rgba(236, 235, 235, 0.4)
    }
    .box_empty{
        height:0.91rem;
    }
    .box-container{
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .goods-topsmall{
        text-align: center;
        height: 2.636rem;
        width:2.636rem;
        margin: 0 auto;
    }
    .goods-topsmall img{
        height: 2.636rem;
        width:2.636rem;
    }
    .people-number{
        font-size: 11px;
        padding: 4px 7px;
        position: absolute;
        left: 0;
        top: 1.875rem;
        z-index: 1;
        border: 1px solid #eee;
        border-left: 0;
        border-top-right-radius: 1.5625rem;
        border-bottom-right-radius: 1.5625rem;
        color: #666;
        background: rgba(251,251,251,.8);
    }
    .goods-middle{
        font-size: 14px;
        line-height: 0.327rem;
        padding: 0 0.218rem;
        margin-top: 0.2rem;
        color: #424242;
    }
    .goods-num{
        color: #fe4070;
        display: inline-block;
        margin-left: 0.036rem;
    }
    .goods-foot{
        padding: 0.25rem;
        overflow: hidden;
    }
    .price-left{
        font-family: Arial;
        float: left;
    }
    .ct-price{
        color: #fe4070;
        font-size:18px;
        
    }
    .jm-price{
        color: #999;
        display: block;
        font-size: 0.2rem;
    }
    .goods-foot-btn {
        float: right;
        margin-top:0.091rem;
        width:1.545rem;
        height:0.473rem;
        font-size:14px;
        color:#fff;
        text-align: center;
        line-height: 0.473rem;
        border: .0625rem solid #fe4070;
        background: #fe4070;
        border-radius: 25px;
    }
    .title-color{
        color: #fe4070;
        border-bottom: 0.1rem solid #fe4070;
    }
</style>



