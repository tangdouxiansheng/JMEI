<template>
    <div>
        111
        <div id="nav">
            <router-link to="/index/home/page/today"><p>今日10点上新</p></router-link>
            <router-link to="/index/home/page/tomorrow"><p>明日10点预告</p></router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
export default {
    created(){
        if(this.$route.path === "/index/home/page"){
            this.$router.push("/index/home/page/today")
        }
    },

}
</script>

<style scoped>
    .router-link-active{color:#fe4070;}
    #nav{width:100%;height:44px;line-height:44px;background:#fff;
        margin-top:30px;border-top:1px solid #ccc;}
    #nav a{width:50%;display:inline-block;text-align:center;}
</style>
