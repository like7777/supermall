import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建store对象
const store = new Vuex.Store({
  state:{
    cartList: []
  },
  mutations:{
    addCart(state,payload){
      let oldParduct = state.cartList.find(item => item.iid === payload.iid)
      if(oldParduct){
        oldParduct.count += 1
      }else{
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  }
})

//挂载
export default store