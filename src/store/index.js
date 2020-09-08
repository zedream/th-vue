import Vue from 'vue'
import Vuex from 'vuex'
import file from './modules/file'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    file,
    user
  }
})

export default store