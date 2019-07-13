<template>
    <div>
         <div class = "fast_parent">
            <ul>
                <li v-for="(item,index) in list" :key="index" class = "light_li">
                    <a :href="item.url">
                        <img :src="item.image_url_set.main[320]" class = "light_li_imgBig"/>
                        <img :src="item.image_url_set.brand[320]" class = "light_li_img"/>
                        <p class = "light_title">{{item.title}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        created(){
        this.$axios.get("/body/luxury/ajaxList?page=1&card_id=1837").then((res)=>{
            // console.log(res.data)
            this.list = res.data.item_list
        })
    }
}
    
</script>

<style>
    .light_li{position: relative;}
    .light_li_imgBig{width:100%;height:3.409rem;}
    .light_li_img{width:1.327rem;height:0.663rem;margin-left:5.309rem;}
    .light_title{position: absolute;top:3.6rem;left:0.182rem;font-size:0.255rem;color:#333;}
</style>