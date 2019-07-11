<template>
    <div>
        <div class="z_nav">
            <i class="fa fa-angle-left" aria-hidden="true" @click="z_back"></i>
            <span>登录</span>
            <p class="fa" @click="register">注册</p>
        </div>
        <div class="reg">
            <p>使用手机登录</p>
            <input type="text" placeholder="请输入11位手机号" ref="phone">
            <input type="password" placeholder="6-16位登陆密码" ref="password">
            <input type="text" placeholder="请输入一个帅气的名字" ref="name" v-model="name">
            <button class="goreg" @click="start">登录</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:localStorage.getItem("name")
        }
    },
    created(){
        console.log(localStorage.getItem("user"))
        console.log(localStorage.getItem("password"))
    },
    methods:{
        z_back(){
            this.$router.go(-1)
        },
        register(){
            this.$router.push("/register")
        },
        start(){
            var user = localStorage.getItem("user");
            var password = localStorage.getItem("password");
            if(this.$refs.phone.value === user && this.$refs.password.value === password){
                localStorage.setItem("name",this.$refs.name.value);
                this.$router.push("/index/my")
            }else{
                alert("账户或密码错误")
            }
        }
    }
}
</script>
<style scoped>
    .z_nav{padding:0 0.255rem;height:0.818rem;line-height:0.818rem;text-align:center;}
    .z_nav .fa{font-size:0.327rem;color:#333;line-height:0.818rem;}
    .z_nav .fa-angle-left{float:left;}
    .z_nav p{float:right;}
    .z_nav span{color:#666;font-size:0.409rem;}

    .reg{margin:0 12%;}
    .reg p{height:1.055rem;line-height:1.055rem;text-align:center;color:#999;font-size:16px;}
    .reg input{background:#f5f5f5;border-radius:20px;width:80%;height:40px;font-size:14px;color:#999999;text-align:left;text-indent:21px;margin-bottom:15px;border:0;outline:none;}
    .reg .goreg{background:#feb2c5;border-radius:20px;width:100%;height:36px;font-size:14px;color:#ffffff;line-height:14px;text-align:center;border:0;}
</style>

