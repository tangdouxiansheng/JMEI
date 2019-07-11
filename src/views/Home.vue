<template>
  <div class="home">
        <div id="header">
            <router-link to="/index/home/page">首页</router-link>
            <router-link to="/index/home/fast">极速免税店</router-link>
            <router-link to="/index/home/body">母婴</router-link>
            <router-link to="/index/home/light">轻奢</router-link>
            <router-link to="/index/home/sale">名品特卖</router-link>
        </div>
        <router-view/>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  #header{width:100%;height:0.891rem;}
  #header a{width:20%;display:inline-block;text-align:center;line-height:0.891rem;font-size:0.255rem;}
  .router-link-active{color:#fe4070;border-bottom:1px solid #fe4070;}
</style>

