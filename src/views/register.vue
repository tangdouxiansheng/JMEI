<template>
    <div>
        <div class="z_nav">
            <i class="fa fa-angle-left" aria-hidden="true" @click="z_back"></i>
            <span>注册</span>
            <p class="fa" @click="land">登录</p>
        </div>
        <div class="reg">
            <p>使用手机注册</p>
            <input type="text" placeholder="请输入11位手机号" ref="phone">
            <span v-if="flag">√</span><span v-else>X</span>
            <input type="password" placeholder="6-16位登陆密码" ref="password">
            <span v-if="word">√</span><span v-else>X</span>
            <button class="goreg" @click="reg">注册</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:false,
            word:false
        }
    },
    methods:{
        z_back(){
            this.$router.go(-1)
        },
        land(){
            this.$router.push("/land")
        },
        reg(){
            if(/^\d{11}$/.test(this.$refs.phone.value)){
                this.flag = true
            }else{
                this.flag = false
            };
            if(/^\d{6,16}$/.test(this.$refs.password.value)){
                this.word = true
            }else{
                this.word = false
            };
            if(this.flag && this.word){
                localStorage.setItem("user",this.$refs.phone.value);
                localStorage.setItem("password",this.$refs.password.value);
                this.$router.push("/land")
            }else{
                alert("错错错");
            }
        }
    },
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

