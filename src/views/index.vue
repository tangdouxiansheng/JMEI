<template>
    <div>
        <div id="nav">
            <router-link to="/index/home">
                <i class="fa fa-home" aria-hidden="true"></i>
                首页
            </router-link>
            <router-link to="/index/assemble">
                <i class="fa fa-users" aria-hidden="true"></i>
                拼团
            </router-link>
            <router-link to="/index/shopping">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                购物车
            </router-link>
            <router-link to="/index/my">
                <i class="fa fa-user-o" aria-hidden="true"></i>
                我的
            </router-link>
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
        background:#fff;border-top:1px solid rgb(238,238,238);z-index:5;display:flex;flex:1;}
    #nav a{width:25%;text-align:center;display:flex;flex-direction: column;}
    #nav a .fa{font-size:21px;margin:6px 0 2px 0}
    .router-link-active{color:#fe4070;}
</style>

