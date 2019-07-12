import Vue from 'vue';
Vue.directive('scroll',(el,binding)=>{
    el.addEventListener('scroll',()=>{
        if(el.scrollTop>200){
            binding.value.bool = true;
        }else{
            binding.value.bool = false;
        }
    })
})