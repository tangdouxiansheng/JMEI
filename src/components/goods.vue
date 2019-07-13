<template>
  <div>
    <div class="goods_parent">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        class="goods_ul">
        
        <li v-for="(item,index) in list" :key="index" class="goods_list">
          <router-link :to='"/detail/"+item.item_id'>
          <img :src="item.image_url_set.dx_image?item.image_url_set.dx_image.url[320]:item.image_url_set.main[320]" class="goods_list_img" />
          <div class="goods_list_div">
            <p class="goods_div_name">{{item.name}}</p>
            <p class="goods_div_price">
              ￥<span class="item_price">{{item.jumei_price}}</span>
              <span class="item_market_price">￥{{item.market_price}}</span>
            </p>
            <p class="goods_div_comments">{{item.deal_comments_number}}条评论</p>
          </div>
          </router-link>
        </li>
        
      </ul>
    </div>
    <mt-button plain class = "goods_button_gotop" @click="gotop" v-show="bool">顶</mt-button>
  </div>
</template>
<script>
import { InfiniteScroll } from "mint-ui";
import { Toast } from 'mint-ui';
import { Button } from 'mint-ui';
export default {
  data() {
    return{
      page:1,
      list:[],
      key: "",
      loading:false,
      bool:false,  
    }
  },
  mounted(){
    window.addEventListener("scroll",this.sctoll)
  },
  methods: {
    sctoll(){
      if(document.documentElement.scrollTop>300){
        this.bool = true
      }else{
        this.bool = false;
      }
    },
     loadMore(){
         this.page++;
         this.changKey();
    },
    changKey() {
      if(this.page>3){
        Toast({
              message: '宝贝正在努力加载..',
              iconClass: 'fa fa-rocket',
              position: 'bottom',
              duration: 2000,
            });
        return
      }   
      this.loading = true;
      var key = this.key === "today" ? 1562826480 : 1562817480;
      this.$axios.get('/JM/api/v1/deal/dealactlist?', {
          params: {
            card_id: 4057,
            page: this.page,
            page_key: this.key,
            platform: "wap",
            client_v: 1.0,
            user_tag_id: 0,
            source: "touch",
            site: "bj",
            k:Date.now()
          }
        }).then((res) => {
          this.list = this.list.concat(res.data.item_list);
          this.loading = false;
        });
    },
    dellist(){
      this.list=[]
      this.loading=false
      this.page=1;
    },
    gotop(){ 
      document.documentElement.scrollTop = 0;
    }
  },
  watch:{
    $route:{
      handler(v) {
       this.key = v.params.goods;
       this.dellist();
       this.changKey();
      },
      deep: true,
      immediate: true
    },
  }
}
</script>


<style scoped>
.goods_list {
  position: relative;
}
.goods_list_img {
  width: 6.818rem;
  height: 2.364rem;
  display: block;
}
.goods_list_div {
  width: 3.709rem;
  height: 2.327rem;
  position: absolute;
  top: 0.364rem;
  left: 2.727rem;
}
.goods_div_name {
  font-size: 0.236rem;
  color: #333;
  width: 3.691rem;
  margin: 0.091rem 0 0.182rem 0;
}
.goods_div_price {
  width: 1.818rem;
  height: 0.4rem;
  color: #fe4070;
  font-size: 0.236rem;
  margin-bottom: 0.091rem;
}
.item_price {
  font-size: 0.364rem;
}
.item_market_price {
  color: #999;
  text-decoration: line-through;
}
.goods_div_comments {
  color: #999;
  font-size: 0.218rem;
}
.goods_button_gotop{position:fixed;right:0.545rem;top:9.455rem;width:0.8rem;height:0.545rem;}
.goods_ul{margin-bottom:0.727rem;}
.fa-rocket{font-size:5.455rem;}
</style>
