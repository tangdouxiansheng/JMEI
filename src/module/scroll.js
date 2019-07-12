
// 自定义指令 gd 监听滚动条事件
import Vue from 'vue'
Vue.directive("gd",(el,binding)=>{
    var dis = Number(el.getAttribute("scrolltop"));
    el.addEventListener("scroll",()=>{
        if(el.scrollTop>dis){
            binding.value.bool=true
        }else{
            binding.value.bool=false
        }
    })
})