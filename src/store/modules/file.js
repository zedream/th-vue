import axios from '@/axios'

const file = {
  state: {
		
  },
  actions: {
    upload ({commit}, data) {
      return new Promise((resolve, reject) => {
        axios.post('/api/file/upload', data)
          .then(res => {
            commit('SET_TOKEN1')
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getFiles ({state}, data) {
      console.log(state)
      return new Promise((resolve, reject) => {
        axios.get('/api/file/list', {params: data})
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    deleteFile ({commit}, data) {
      return new Promise((resolve, reject) => {
        axios.post('/api/file/delete', data)
          .then(res => {
            commit('SET_TOKEN1')
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  mutations: {
		SET_TOKEN1: (state, value) => {
			console.log(value)
		}
  }
}

export default file