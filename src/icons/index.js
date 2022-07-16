import SvgIcon from '@/components/SvgIcon'

/**
 * 第一个参数是搜索的目录
 * 第二个参数是 是否搜索子目录
 * 第三个参数是匹配的正则
 */
const svgRequire = require.context('./svg', false, /\.svg$/)

svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
