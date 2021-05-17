import { createStore } from 'vuex'

export default createStore({
  state: {//用来全局管理共享数据
    counter: 0,
    // username: "小陈"
  },
  mutations: {//用来书写对共享数据的修改方法
    increment(state){
      console.log("add")
      state.counter++
    }
  },
  actions: {
  },
  modules: {
  }
})
