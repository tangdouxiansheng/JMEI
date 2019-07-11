<template>
    <div>
        <div id="nav">
            <router-link to="/index/home">首页</router-link>
            <router-link to="/index/assemble">拼团</router-link>
            <router-link to="/index/shopping">购物车</router-link>
            <router-link to="/index/my">我的</router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
   
    export default {
       
    }
</script>

<style scoped>
    #nav{height:0.965rem;width:100%;position:fixed;bottom:0;
        background:#fff;border-top:1px solid rgb(238,238,238);z-index:5;}
    #nav a{width:25%;display:inline-block;text-align:center;}
    .router-link-active{color:#fe4070;}
</style>

