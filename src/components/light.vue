<template>
    <div>
       <div class = "light_parent">
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

<style scoped>
    .light_parent{margin-top:55px;}
    .light_li{position: relative;}
    .light_li_imgBig{width:375px;height:187.5px;}
    .light_li_img{width:72.98px;height:36.48px;margin-left:292px;}
    .light_title{position: absolute;top:198px;left:10px;font-size:14px;color:#333;}
</style>

