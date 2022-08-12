import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
import variables from '@/styles/variables.module.scss'

export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables
  }),
  mutations: {
    setMainColor(state, newColor) {
      state.variables.menuBg = newColor
      state.mainColor = newColor
      setItem(MAIN_COLOR, newColor)
    }
  }
}
