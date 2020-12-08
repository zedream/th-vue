import axios from '@/axios'
import router from '@/router'

const menu = {
  state: {
    tag: JSON.parse(sessionStorage.getItem('tag')) || [{path: '/', title: '首页'}],
    cur: sessionStorage.getItem('currentpath') || '/'
  },
  actions: {
    addTag ({commit}, data) {
      return new Promise(() => {
        commit('ADD_TAG', data)
      })
    },
    register ({commit}, data) {
      return new Promise((resolve, reject) => {
        axios.post('/api/auth/register', data)
          .then(res => {
            commit('REGISTER', res.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getRouter ({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('/api/auth/routes')
          .then(res => {
            commit('REGISTER', res.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  mutations: {
    ADD_TAG: (state, value) => {
      if (state.tag.findIndex(val => val.path === value.path) === -1) {
        state.tag.push(value)
      }
      sessionStorage.setItem('currentpath', value.path)
      sessionStorage.setItem('tag', JSON.stringify(state.tag))
      state.cur = value.path

    },
    DEL_TAG: (state, value) => {
      state.tag.splice(state.tag.findIndex(val => val.path === value), 1)
      state.cur = state.tag[state.tag.length - 1].path
      sessionStorage.setItem('currentpath', state.cur)
      sessionStorage.setItem('tag', JSON.stringify(state.tag))
      router.push(state.cur)
    },
    SET_TAG: () => {

    },
    SET_ROUTES: (state, value) => {
      sessionStorage.setItem('routes', JSON.stringify(value))
      state.routes = value
    }
  }
}

export default menu
