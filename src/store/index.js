import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: '0',
  ser: null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
};
export default new Vuex.Store({
  state,
  getters: {
    getStorage(state) {
      if (!state.token) {
        state.token = JSON.parse(localStorage.getItem(key))
      }
      return state.token
    }
  },
  mutations: {
    $_setToken(state, value) {
      state.token = value;
      localStorage.setItem('token', value);
    },
    $_removeStorage(state, value) {
      localStorage.removeItem('token');
    },
    $_setUsername(state, value) {
      localStorage.setItem('username', value);
    },
    $_removeUsername(state, value) {
      localStorage.removeItem('username')
    }
  }
})