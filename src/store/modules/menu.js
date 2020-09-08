// import axios from '@/axios'

// const user = {
//   state: {
//     openedMenu: sessionStorage.getItem('curPath') || []
//   },
//   actions: {
//     login ({commit}, data) {
//       return new Promise((resolve, reject) => {
//         axios.post('/api/auth/login', data)
//           .then(res => {
//             commit('SET_TOKEN', res.data)
//             commit('SET_USERINFO', res.data)
//             resolve(res.data)
//           })
//           .catch(err => {
//             reject(err)
//           })
//       })
//     },
//     register ({commit}, data) {
//       return new Promise((resolve, reject) => {
//         axios.post('/api/auth/register', data)
//           .then(res => {
//             commit('REGISTER', res.data)
//             resolve(res.data)
//           })
//           .catch(err => {
//             reject(err)
//           })
//       })
//     },
//     getRouter ({commit}) {
//       return new Promise((resolve, reject) => {
//         axios.get('/api/auth/routes')
//           .then(res => {
//             commit('REGISTER', res.data)
//             resolve(res.data)
//           })
//           .catch(err => {
//             reject(err)
//           })
//       })
//     }
//   },
//   mutations: {
// 		SET_TOKEN: (state, value) => {
//       sessionStorage.setItem('th-token', value.data.token)
//       state.thToken = value.data.token
//     },
//     SET_USERINFO: (state, value) => {
//       sessionStorage.setItem('userinfo', JSON.stringify(value.data))
//       state.userInfo = value.data
//     },
//     REGISTER: () => {

//     },
//     SET_ROUTES: (state, value) => {
//       sessionStorage.setItem('routes', JSON.stringify(value))
//       state.routes = value
//     }
//   }
// }

// export default user