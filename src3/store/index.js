import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabList: [
      {
        title: "首页",
        path: "/home/dashboard",
      }
    ],
  },
  mutations: {
    setTabList: ({ tabList }, payload) => {
      let flag = false
      tabList.forEach(item=>{
        if (item.title == payload.title){
          flag = true
        }
      })
      if (!flag){
        //没找到
        tabList.push(payload)
      }
    },
    // 删除tab项
    delTabItem: ({tabList},index) => {
        tabList.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
