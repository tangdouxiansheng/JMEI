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

