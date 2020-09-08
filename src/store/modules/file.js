import axios from '@/axios'

const file = {
  state: {
		
  },
  actions: {
    upload ({commit}, data) {
      return new Promise((resolve, reject) => {
        axios.post('/api/upload', data)
          .then(res => {
            commit('SET_TOKEN1', data)
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