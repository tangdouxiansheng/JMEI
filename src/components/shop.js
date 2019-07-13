import { Toast } from 'mint-ui';
export default{
    state:{
        goods:localStorage.getItem("goods")?JSON.parse(localStorage.getItem("goods")).goods:[]
    },
    mutations:{
        addshop(state,payload){
            var name = localStorage.getItem("name");
            if(name){
                if(state.goods.length === 0){
                    state.goods.push(payload)
                }else{
                    var bool = state.goods.some((item)=>{
                        if(item.id === payload.id){
                            item.number ++;
                            return true
                        }else{
                            return false
                        }
                    });
                    if(!bool){
                        state.goods.push(payload)
                    }
                };
                localStorage.setItem("goods",JSON.stringify(state))
                Toast({
                    message: '添加成功',
                    iconClass: 'fa fa-opera fa-pulse',
                    position: 'middle',
                    duration: 5000
                });
            }else{
                alert("未登录，请先登录")
            }

        },
        inc(state,id){
            state.goods.forEach((item)=>{
                if(item.id === id){
                    item.number ++;
                }
            })
            localStorage.setItem("goods",JSON.stringify(state))
        },
        dec(state,id){
            state.goods.forEach((item)=>{
                if(item.id === id){
                    if(item.number > 0){
                        item.number --;
                    }
                }
            })
            localStorage.setItem("goods",JSON.stringify(state))
        },
        del(state,id){
            if(Array.isArray(id)){
                state.goods.length = 0
                history.go(0)
              }else{
                state.goods.forEach((item)=>{
                    if(item.id === id){
                        state.goods.splice(0,1)
                    }
                })
              }
              localStorage.setItem("goods",JSON.stringify(state))
        }
    },
    getters:{
        money(state){
            var money = 0;
            state.goods.forEach((item)=>{
                if(item.check){
                    money += item.jumei_price * item.number
                }
            })
            return money
        },
        number(state){
            var number = 0;
            state.goods.forEach((item)=>{
                if(item.check){
                    number += item.number
                }
            })
            return number
        }
    },
    actions:{

    }
}