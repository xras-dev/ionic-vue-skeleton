import { createStore } from 'vuex';

export default createStore({
  state: {
    token: localStorage.getItem('token') && localStorage.getItem('token')!==undefined && localStorage.getItem('token')!==null ? localStorage.getItem('token') : null,
    count:1
  },
  mutations: {
    addCount(state){
      state.count++
    }
  },
  actions: {
    doAddCount({commit}){
      commit('addCount');
    }
  },
  modules: {
  },
});
