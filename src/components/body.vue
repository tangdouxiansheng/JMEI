<template>
    <div>
        <div class = "body_parent">
            <ul>
                <li v-for="(item,index) in list" :key="index" class = "body_li">
                    <a :href="item.url">
                        <img :src="item.image_url_set.main[320]" class = "body_li_imgBig"/>
                        <img :src="item.image_url_set.brand[320]" class = "body_li_img"/>
                        <p class = "body_title">{{item.title}}</p>
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
        this.$axios.get("/body/muandbaby/ajaxList?page=1&card_id=7430").then((res)=>{
            // console.log(res.data)
            this.list = res.data.item_list
        })
    }
}
</script>

<style scoped>
    .body_parent{margin-top:55px;}
    .body_li{position: relative;}
    .body_li_imgBig{width:375px;height:187.5px;}
    .body_li_img{width:72.98px;height:36.48px;margin-left:283px;}
    .body_title{position: absolute;top:195px;left:10px;font-size:14px;color:#333;}
</style>

