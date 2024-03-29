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
import register from './views/register.vue'       //注册
import land from './views/land.vue'               //登录
import assList from './views/assemble/assList.vue' //拼团列表
import assDetail from './views/assemble/assDetail.vue' //拼团列表详情页
import detail from './components/detail.vue'       // 首页跳转的详情页
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
      {path:"/index/assemble",name:"assemble",component:assemble,
        redirect:'/index/assemble/assList',
        children:[
        {path:'/index/assemble/assList',name:'assList',component:assList}
      ]},
      {path:"/index/shopping",name:"shopping",component:shopping},
      {path:"/index/my",name:"my",component:my}
    ]},
    {
      path:"/assDetail/:id",name:"assDetail",component:assDetail
    },
    {path:"/register",name:"register",component:register},
    {path:"/land",name:"land",component:land},
    {path:'/detail/:id',name:'dateil',component:detail}
  ]
})
