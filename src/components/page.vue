<template>
    <div>
        111
        <div id="nav">
            <router-link to="/index/home/page/today">今日10点上新</router-link>
            <router-link to="/index/home/page/tomorrow">明日10点预告</router-link>
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
    }
}
</script>

<style scoped>
    .router-link-active{color:#fe4070;}
    #nav{width:100%;}
    #nav a{width:50%;display:inline-block;text-align:center;}
</style>
