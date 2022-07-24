import { getUserInfo, login } from '@/api/sys'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import md5 from 'md5'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            console.log(data)
            commit('setToken', data.token)
            setTimeStamp()
            resolve()
          })
          .catch((err) => {
            console.log(err)
            return reject(err)
          })
      })
    },
    async getUserInfo({ commit }) {
      const res = await getUserInfo()
      commit('setUserInfo', res)
      return res
    },
    logout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
