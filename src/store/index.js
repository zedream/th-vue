import Vue from 'vue'
import Vuex from 'vuex'
import file from './modules/file'
import user from './modules/user'
import system from './modules/system'
import dict from './modules/dict'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    file,
    user,
    system,
    dict
  }
})

export default store