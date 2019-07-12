<template>
  <div class="home" v-gd="flag" scrolltop="60">
    <div class="home_find">
      <a href="#" class="home_find_a">
        <i class="fa fa-search" aria-hidden="true"></i>
        <span>搜索商品 分类 功效</span>
      </a>
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div id="header">
      <router-link to="/index/home/page">首页</router-link>
      <router-link to="/index/home/fast">极速免税店</router-link>
      <router-link to="/index/home/body">母婴</router-link>
      <router-link to="/index/home/light">轻奢</router-link>
      <router-link to="/index/home/sale">名品特卖</router-link>
    </div>
    <div id="footer" v-show="flag.bool">
      <router-link to="/index/home/page">首页</router-link>
      <router-link to="/index/home/fast">极速免税店</router-link>
      <router-link to="/index/home/body">母婴</router-link>
      <router-link to="/index/home/light">轻奢</router-link>
      <router-link to="/index/home/sale">名品特卖</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import scroll from "../module/scroll";
export default {
  data() {
    return {
      flag: {
        bool: false
      }
    };
  }
};
</script>
<style scoped>
#header {
  width: 100%;
  height: 0.891rem;
}
#header a {
  width: 20%;
  display: inline-block;
  text-align: center;
  line-height: 0.891rem;
  font-size: 0.255rem;
}
.router-link-active {
  color: #fe4070;
  border-bottom: 1px solid #fe4070;
}

.home_find {
  width: 100%;
  height: 40px;
  overflow: hidden;
  position: relative;
}
.home_find_a {
  width: 300px;
  height: 30px;
  border-radius: 30px;
  background: #f5f5f5;
  color: #999;
  display: block;
  line-height: 30px;
  margin-top: 5px;
  margin-left: 20px;
  text-align: center;
}
.home_find .fa-search {
  font-size: 16px;
}
.home_find_a span {
  margin-left: 5px;
  font-size: 14px;
  color: #999;
}
.home_find .fa-bars {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
}

.home {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}
#footer {
  width: 100%;
  height: 0.891rem;
  position: fixed;
  top: 0px;
  z-index: 2;
  background: #fff;
}
#footer a {
  width: 20%;
  display: inline-block;
  text-align: center;
  line-height: 0.891rem;
  font-size: 0.255rem;
}
.router-link-active {
  color: #fe4070;
  border-bottom: 1px solid #fe4070;
}
</style>

