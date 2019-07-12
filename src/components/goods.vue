<template>
  <div>
    <div class="goods_parent">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        class="goods_ul">
        <li v-for="(item,index) in list" :key="index" class="goods_list">
          <img :src="item.image_url_set.dx_image?item.image_url_set.dx_image.url[320]:item.image_url_set.main[320]" class="goods_list_img" />
          <div class="goods_list_div">
            <p class="goods_div_name">{{item.name}}</p>
            <p class="goods_div_price">
              ￥<span class="item_price">{{item.jumei_price}}</span>
              <span class="item_market_price">￥{{item.market_price}}</span>
            </p>
            <p class="goods_div_comments">{{item.deal_comments_number}}条评论</p>
          </div>
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
      haha:[],
      heihei:[]
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
  width: 375px;
  height: 130px;
  display: block;
}
.goods_list_div {
  width: 204px;
  height: 128px;
  position: absolute;
  top: 20px;
  left: 150px;
}
.goods_div_name {
  font-size: 13px;
  color: #333;
  width: 203px;
  margin: 5px 0 10px 0;
}
.goods_div_price {
  width: 100px;
  height: 22px;
  color: #fe4070;
  font-size: 13px;
  margin-bottom: 5px;
}
.item_price {
  font-size: 20px;
}
.item_market_price {
  color: #999;
  text-decoration: line-through;
}
.goods_div_comments {
  color: #999;
  font-size: 12px;
}
.goods_button_gotop{position:fixed;
                    right:30px;top:520px;width:44px;height:30px;}
.goods_ul{margin-bottom:40px;}
.fa-rocket{font-size:300px;}
</style>
