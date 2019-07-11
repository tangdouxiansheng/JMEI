<template>
    <div class="shopping">
        <div class="z_nav">
            <i class="fa fa-angle-left" aria-hidden="true" @click="z_back"></i>
            <span>购物车</span>
            <i class="fa fa-home" aria-hidden="true" @click="z_home"></i>
        </div>
        <div class="z_body">
            <img src="./../assets/oops.png">
            <p>您的购物车中没有商品，请先去挑选心爱的商品吧！</p>
            <button @click="z_home">去逛逛</button>
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
</style>
