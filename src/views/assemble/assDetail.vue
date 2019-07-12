<template>
    <div class="detail">
        <ul>
            <li>
               <div class="goods-img"><img src="http://mp5.jmstatic.com/product/002/195/2195337_std/2195337_1000_1000.jpg?v=1456657775&imageView2/2/w/640/q/90" alt=""></div>
                    <div class="goods-price">
                        <p class="tuan-price">
                            <b>￥35</b>
                            <strong>包邮</strong>
                        </p>
                        <p class="del-price"><span>单买价¥49.9</span></p>
                        <p class="tuan-number">已有30人参与</p>
                        <p class="price-details">价格详情</p>
                    <div class="time">
                        <div>还剩两天</div>
                        <span class="refund_msg">逾期未成团自动退款</span>
                    </div>
                </div> 
            </li>
        </ul>
    
        <div class="detail_foot">
            <div class="foot_text" @click="go">首页</div>
            <div class="foot_price">￥49<br/>单独买</div>
            <div class="foot_btn">￥35<br/>包邮开团</div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        go(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    .detail {
        font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
    }
    .detail ul li{
        border-bottom:0.2rem solid rgba(236, 235, 235, 0.4);
    }
    .detail_foot{
        width: 100%;
        height: 0.691rem;
        padding: 0.182rem 0;
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 8;
        border-top: 0.01rem solid #eee;
        display: flex;
        justify-content: space-around;
        text-align: center;
        font-size:12px;
    }
    .foot_text{
        width: 0.636rem;
        height: 0.636rem;
        line-height: 0.636rem;
        border: 0.018rem solid #e0e0e0;
        border-radius: 50%;
        text-align: center;
        overflow: hidden;
        position: relative;
        color:#999999;
    }
    .foot_price{
        color: #666;
        padding-right: 0.5rem;
        font-size:14px;
    }
    .foot_btn{
        border-radius: 1.25rem;
        width: 2.764rem;
        background: #fe4070;
        border: .0625rem solid #fe4070;
        color: #fff;
        padding: 0.055rem 0;
        line-height:0.255rem 
    }
    .goods-img{
        width:100%;
        position: relative;
    }
    .goods-img img{
        width:100%;
        display: block;
    }
    .goods-price{
        padding: 0.182rem 0.218rem 0.218rem;
        height: 1.8rem;
    }
    .tuan-price{
        display: block;
        margin-left: .125rem;
        font-size: 16px;
        color: #f33873;
        font-family: arial;
        float: left;
    }
    .tuan-price b{
        font-size: 24px;
        font-weight: 400;
    }
    .tuan-price strong{
        font-size: 0.2rem;
        line-height: 0.2rem;
        padding: 2px;
        border-radius: 4px;
        margin-top: -5px;
        margin-left: 2px;
        display: inline-block;
        color: #fff;
        background: #fe4070;
        vertical-align: middle;
        font-weight: 400;
    }
    .del-price{
        margin-left: 0.3125rem;
        color: #666;
        font-size:15px;
        float: left;
        line-height: 40px;
    }
    .tuan-number{
        float: right;
        color: #666;
        line-height: 40px;
        font-size: 14px;
    }
    .price-details{
        color: #999;
        padding-right: 0.9375rem;
        display: inline-block;
        font-size: 14px;
        line-height: 14px;
        background:url(http://a4.jmstatic.com/eefb9557825199a0/p-details.png) no-repeat 60px 1px;
        background-size: 0.218rem 0.218rem;
    }
    .time{
        color: #666;
        line-height: 18px;
        font-size: 13px;
        margin-top:0.182rem;
    }
    .time>div{
        float: left;
    }
    .refund_msg{
        float: right;
    }
</style>
