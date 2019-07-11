<template>
    <div class="my">
        <div class="z_nav">
            <i class="fa fa-angle-left" aria-hidden="true" @click="z_back"></i>
            <span>我的聚美</span>
            <i class="fa fa-home" aria-hidden="true" @click="z_home"></i>
        </div>
        <div class="z_user">
            <div class="fa fa-eercast" aria-hidden="true"></div>
            <div class="z_operation">
                <span>注册</span>
                <span>登陆</span>
            </div>
        </div>
        <div class="z_order">
            <div class="z_up">
                <i class="fa fa-bars" aria-hidden="true"></i>
                我的订单
                <a>
                    <span>查看我的全部订单</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
            </div>
            <div class="z_under">
                <span>待付款</span>
                <span>待收货</span>
                <span>待评价</span>
                <span>退货/退款</span>
            </div>
        </div>
        <div class="z_order">
            <div class="z_up">
                <i class="fa fa-jpy" aria-hidden="true"></i>
                我的资产
            </div>
            <div class="z_under">
                <span>现金券</span>
                <span>红包</span>
                <span>聚美余额</span>
                <span>礼品卡</span>
            </div>
        </div>
        <div class="z_footer">
            <p>
                <i class="fa fa-wheelchair-alt" aria-hidden="true"></i>
                <span>售后服务</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </p>
            <p>
                <i class="fa fa-wheelchair-alt" aria-hidden="true"></i>
                <span>意见反馈</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </p>
            <p>
                <i class="fa fa-wheelchair-alt" aria-hidden="true"></i>
                <span>收货地址</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </p>
            <p>
                <i class="fa fa-wheelchair-alt" aria-hidden="true"></i>
                <span>退出登录</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </p>
            <p>
                <i class="fa fa-wheelchair-alt" aria-hidden="true"></i>
                <span>400-123-8888</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </p>
        </div>
        <div class="last">
            客服热线400-123-8888 (8:00-22:00)<br>
            拨打前请记录您的UID  0
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        z_back(){
            this.$router.go(-1)
        },
        z_home(){
            this.$router.push("/")
        }
    }
}
</script>
<style scoped>
    .my{width:100%;background:#eee}
    .z_nav{padding:0 0.255rem;height:0.818rem;line-height:0.818rem;text-align:center;background:#ed145b;padding-bottom:0.4rem;}
    .z_nav .fa{font-size:0.327rem;color:#fff;line-height:0.818rem;}
    .z_nav .fa-angle-left{float:left;}
    .z_nav .fa-home{float:right;}
    .z_nav span{color:#fff;font-size:0.309rem;}

    .z_user{width:100%;height:1.945rem;background:#ed145b;margin-top:-1px;}
    .z_user .fa{width:100%;height:1.091rem;font-size:1.091rem;text-align:center;color:#fff;}
    .z_user .z_operation{width:3.636rem;height:0.436rem;line-height:0.436rem;margin:auto;text-align:center;padding:0.182rem;font-size:0.345rem;color:#fff;}
    .z_user .z_operation span{width:1.727rem;display:inline-block;font-weight:800;}

    .z_order{background:#fff;margin-top:0.218rem;}
    .z_order .z_up{height:0.909rem;padding-left:0.145rem;border-bottom:1px solid #eaeaea;line-height:0.909rem;font-size:17px;}
    .z_order .z_up .fa-bars,.fa-jpy{font-size:0.364rem;margin-right:0.182rem;}
    .z_order .z_up a{float:right;margin-right:5px;color:#999;font-size:12px;}
    .z_order .z_up a .fa-angle-right{width:20px;height:20px;text-align:center;}
    .z_order .z_under{width:100%;}
    .z_order .z_under span{width:25%;display:inline-block;height:0.909rem;padding:0.182rem 0;line-height:0.909rem;text-align:center;color:#666;font-size:12px;}
    .z_footer{background:#fff;margin-top:0.218rem;}
    .z_footer p{color:#333;padding-left:8px;border-bottom:1px solid #eaeaea;height:0.909rem;line-height:0.909rem;font-size:17px;}
    .z_footer p .fa{font-size:0.364rem;margin-right:0.182rem;}
    .z_footer p .fa:last-of-type{float:right;margin-top:6px;margin-right:10px;}
    .last{color:#999;font-size:14px;margin:15px;line-height:15px;padding-bottom:60px;}
</style>


