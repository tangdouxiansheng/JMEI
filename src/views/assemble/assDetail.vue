<template>
    <div class="detail" >
        <ul v-scroll="flag" ref="detail">
            <li>
               <div class="goods-img"><img :src="url" alt=""></div>
                    <div class="goods-price">
                        <p class="tuan-price">
                            <b>{{list.group_jumei_price?list.group_jumei_price:'暂无'}}</b>
                            <strong>包邮</strong>
                        </p>
                        <p class="del-price"><span>{{list.group_single_price?list.group_single_price:'暂无'}}</span></p>
                        <p class="tuan-number">{{list.buyer_number_text ? list.buyer_number_text:'暂无人评价' }}</p>
                        <p class="price-details">价格详情</p>
                    <div class="time">
                        <div>还剩两天</div>
                        <span class="refund_msg">逾期未成团自动退款</span>
                    </div>
                </div> 
            </li>
            <li>
                <div class="tuan_people">
                    <p><span class="goods-num">{{list.recommend_data[0].group_name_tag ? list.recommend_data[0].group_name_tag :'暂无'}}</span>{{list.share_info[1].text ? list.share_info[1].text:0}}</p>
                </div>
            </li>
            <li>
                <div class="ruleWrap">
                    <h3 class="course-title">拼团玩法 <a class="course-rule" href="http://s.h5.jumei.com/yiqituan/rules?type=" >查看规则</a></h3>
                    <div class="course-wrap">
                        <div class="course-item">支付<br/>开团/参团 <span class="course-icon"></span></div>
                        <div class="course-item">邀请<br/>好友参团 <span class="course-icon"></span></div>
                        <div class="course-item">拼团成功立即发货<br/>逾期未成团自动退款 </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="jm-fuwu">
                    <div class="fwh-icon"></div>
                    <div>
                        <div class="fwh-title">聚美官方服务号</div>
                        <div class="fwh-words">更多靠谱优惠推荐，尽在聚美微信服务号</div>
                    </div>
                </div>
                <div class="jm-fllow">
                    <div class="fwh-btn">点击关注</div>
                    <div class="fwh-fllow">或 微信搜索“聚美优品jumei”关注</div>
                </div>
            </li>
            <li>
                <h3 class="course-title">选择型号</h3>
                <div class="model-list">{{list.size[0].name ? list.size[0].name:''}}</div>
            </li>
            <li>
                <div class="tab-box">
                    <ul>
                        <li>图文详情</li>
                        <li>商品参数</li>
                        <li>评价</li>
                    </ul>
                </div>
            </li>
            <li class="detail_img">
                <img src="http://p12.jmstatic.com/html_editor/201807/02/1530519974454.jpg" alt="">
                <img src="http://p12.jmstatic.com/html_editor/201807/02/15305198713469.jpg" alt="">
                <img src="http://p12.jmstatic.com/html_editor/201807/02/15305199746021.jpg" alt="">
                <img src="http://p12.jmstatic.com/html_editor/201807/02/15305199749450.jpg" alt="">
                <img src="http://p12.jmstatic.com/html_editor/201807/02/15305198722741.jpg" alt="">
                <img src="http://p12.jmstatic.com/html_editor/201807/02/15305199755368.jpg" alt="">
                <img src="http://p12.jmstatic.com/html_editor/201807/02/15305199758789.jpg" alt="">
                <img src="http://p12.jmstatic.com/html_editor/201812/13/1544696724565.jpg" alt="">
                <img src="http://p12.jmstatic.com/html_editor/201906/12/15603202819249.jpg" alt="">
            </li>
        </ul>
        <div class="detail_empty"></div>
        <div class="go_top" v-show="flag.bool" @click="goTop"><img src="http://f0.jmstatic.com/btstatic/h5/index/go_top.png" alt=""></div>
        <div class="detail_foot">
            <div class="foot_text" @click="go">首页</div>
            <div class="foot_price" @click="logon" v-html="list.bottom_button.display_text ? list.bottom_button.display_text :''"></div>
            <div class="foot_btn" @click="logon"><span v-html="list.bottom_button.action_text"></span></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            url:'',
            flag:{
                bool:false
            },
        }
    },
    created(){
        this.$axios.get('/jm/yiqituan/ajaxDetail?',{
            params:{
                item_id:this.$route.params.id,
                type:'global_deal',
                tid:''
            }
        }).then((res)=>{
            this.list = res.data.data;
            var obj = res.data.data.share_info[0];
            this.url = obj.image_url_set.url[320];
        })
    },
    methods:{
        go(){
            this.$router.go(-1);
        },
        goTop(){
            this.$refs.detail.scrollTop = 0;
        },
        logon(){
            this.$router.push('/land')
        }
    },
}
</script>
<style scoped>
    .detail {
        font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0
    }
    .detail ul{
        height: 100%;
        overflow: scroll;
    }
    .detail ul li{
        border-bottom:0.2rem solid rgba(236, 235, 235, 0.4);
    }
    .detail_foot{
        width: 100%;
        height: 0.691rem;
        padding: 0.182rem 0;
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 8;
        border-top: 0.01rem solid #eee;
        display: flex;
        justify-content: space-around;
        text-align: center;
        font-size:12px;
    }
    .detail_empty{
        height: 1.1rem;
    }
    .foot_text{
        width: 0.636rem;
        height: 0.636rem;
        line-height: 0.636rem;
        border: 0.018rem solid #e0e0e0;
        border-radius: 50%;
        text-align: center;
        overflow: hidden;
        position: relative;
        color:#999999;
    }
    .foot_price{
        color: #666;
        padding-right: 0.5rem;
        font-size:14px;
    }
    .foot_btn{
        border-radius: 1.25rem;
        width: 2.764rem;
        background: #fe4070;
        border: .0625rem solid #fe4070;
        color: #fff;
        padding: 0.055rem 0;
        line-height:0.255rem 
    }
    .foot_btn span{
        display: inline-block;
        margin-top:0.109rem
    }
    .goods-img{
        width:100%;
        position: relative;
    }
    .goods-img img{
        width:100%;
        display: block;
    }
    .goods-price{
        padding: 0.182rem 0.218rem 0.218rem;
        height: 1.8rem;
    }
    .tuan-price{
        display: block;
        margin-left: .125rem;
        font-size: 16px;
        color: #f33873;
        font-family: arial;
        float: left;
    }
    .tuan-price b{
        font-size: 24px;
        font-weight: 400;
    }
    .tuan-price strong{
        font-size: 0.2rem;
        line-height: 0.2rem;
        padding: 2px;
        border-radius: 4px;
        margin-top: -5px;
        margin-left: 2px;
        display: inline-block;
        color: #fff;
        background: #fe4070;
        vertical-align: middle;
        font-weight: 400;
    }
    .del-price{
        margin-left: 0.3125rem;
        color: #666;
        font-size:15px;
        float: left;
        line-height: 40px;
    }
    .tuan-number{
        float: right;
        color: #666;
        line-height: 40px;
        font-size: 14px;
    }
    .price-details{
        color: #999;
        padding-right: 0.9375rem;
        display: inline-block;
        font-size: 14px;
        line-height: 14px;
        background:url(http://a4.jmstatic.com/eefb9557825199a0/p-details.png) no-repeat 60px 1px;
        background-size: 0.218rem 0.218rem;
    }
    .time{
        color: #666;
        line-height: 18px;
        font-size: 13px;
        margin-top:0.182rem;
    }
    .time>div{
        float: left;
    }
    .refund_msg{
        float: right;
    }
    .tuan_people{
        padding: 0.25rem
    }
    .tuan_people p{
        line-height: 20px;
        color: #333;
        font-size: 14px;
    }
    .goods-num{
        color: #fe4070;
        margin-left: .125rem;
        display: inline-block;
    }
    .course-title {
        line-height: 14px;
        padding: 13px 12px;
        font-size: 14px;
        font-weight: 400;
    }
    .course-rule {
        float: right;
        background: url(//p0.jmstatic.com/mobile/touch/Image/super/right.png) no-repeat 60px center;
        background-size: 0.3rem;
        padding-right: 1rem;
        color: #666;
        font-size: 12px;
    }
    .course-wrap {
        overflow: hidden;
        padding: 0.25rem 12px;
        font-size: 14px;
         display: flex;
        justify-content: space-between;
        color: #666;
        font-size: 13px;
        /* position: relative; */
    } 
    .course-icon{
        width: 10px;
        height: 18px;
        background: url(http://a0.jmstatic.com/970b11f5823b4cff/arrow_icon.png) no-repeat center right;
        background-size: contain;
        display: inline-block;
        margin: 0 0.4rem 0;
    }   
    .jm-fuwu{  
        padding: 13px 12px;
        display: table;
    }
    .fwh-icon{
        width: 50px;
        height: 50px;
        background: url(http://a4.jmstatic.com/3917f15b23ae1ca0/logowxffh.png) no-repeat;
        background-size: contain;
        display: table-cell;
    }
    .fwh-title {
        font-size: 14px;
        color: #333;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 4px;
    }
    .fwh-fllow, .fwh-words {
        font-size: 13px;
        color: #999;
        line-height: 13px;
        margin-left: 10px;
    }
    .jm-fllow {
        padding: 8px 10px;
        display: table;
    }
    .fwh-btn {
        width: 65px;
        height: 19px;
        font-size: 11px;
        line-height: 19px;
        color: #fff;
        text-align: center;
        background-color: #fe4070;
        border-radius: 20px;
        display: table-cell;
        margin-right: 10px;
    }
    .model-list{
        padding-left: 12px;
        padding-bottom: 10px;
    }
    .model-list{
        width:1.9rem;
        font-size: 12px;
        line-height: 12px;
        padding: 6px 17px;
        border-radius: 25px;
        margin: 0 6px 6px;
        color: #fff;
        background-color: #fe4070;
        border: solid 1px #fe4070;
    }
    .tab-box{
        height:0.864rem;
        line-height: 0.864rem;
        font-size: 13px;
        color:#666;
    }
    .tab-box ul{
        display: flex;
        justify-content:space-around;
    }
    .tab-box ul li{
        border-bottom: 0;
    }
    .detail_img img{
        display: block;
        width:100%;
    }
    .go_top{
        width: 0.8rem;
        height: 0.8rem;
        position: fixed;
        right: 0.2rem;
        bottom: 1.7rem;
        background: #fff;
        border-radius: 50%;
    }
    .go_top img{
        width: 0.8rem;
        height: 0.8rem;
    }
</style>
