<template>
  <div>
    <div class = "goods_parent">
      <ul class="goods_ul">
        <!-- item.image_url_set.dx_image.url[320] -->
        <li v-for="(item,index) in list" :key="index" class="goods_list">
          <img :src="item.image_url_set.dx_image.url[320]" class="goods_list_img" />
          <div class="goods_list_div">
            <p class="goods_div_name">{{item.name}}</p>
            <p class="goods_div_price">
              ￥
              <span class="item_price">{{item.jumei_price}}</span>
              <span class="item_market_price">￥{{item.market_price}}</span>
            </p>
            <p class="goods_div_comments">{{item.deal_comments_number}}条评论</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      key: ""
    };
  },
  watch: {
    $route: {
      handler(v) {
        this.key = v.params.goods;
        this.changKey();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    changKey() {
      var key = this.key === "today" ? 1562826480 : 1562817480;
      this.$axios.get(`/JM/api/v1/deal/dealactlist?`, {
          params: {
            card_id: 4057,
            page: 1,
            page_key: key,
            platform: "wap",
            client_v: 1.0,
            user_tag_id: 0,
            source: "touch",
            site: "bj"
          }
        }).then(res => {
          this.list = res.data.item_list;
        });
    }
  }
};
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
</style>
