import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'             //开始
import home from './views/Home.vue'               //主页
import assemble from './views/assemble.vue'       //拼团
import shopping from './views/shopping.vue'       //购物车
import my from './views/my.vue'                   //我的
import page from './components/page.vue'          //主页里的首页
import fast from './components/fast.vue'          //极速免税店
import body from './components/body.vue'          //母婴
import light from './components/light.vue'        //轻奢
import sale from './components/sale.vue'          //名品特卖
import goods from './components/goods.vue'        //今日明日商品

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:"/",redirect:"/index"},
    {path:"/index",name:"index",component:index,redirect:{"name":"home"},children:[
      {path:"/index/home",name:"home",component:home,redirect:{"name":"page"},children:[
        {path:"/index/home/page",name:"page",component:page,children:[
          {path:"/index/home/page/:goods?",name:"goods",component:goods}
          // {path:"/index/home/tomorrow",name:"tomorrow",component:tomorrow}
        ]},
        {path:"/index/home/fast",name:"fast",component:fast},
        {path:"/index/home/body",name:"body",component:body},
        {path:"/index/home/light",name:"light",component:light},
        {path:"/index/home/sale",name:"sale",component:sale}
      ]},
      {path:"/index/assemble",name:"assemble",component:assemble},
      {path:"/index/shopping",name:"shopping",component:shopping},
      {path:"/index/my",name:"my",component:my}
    ]}
  ]
})
