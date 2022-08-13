import rgbHex from 'rgb-hex'
import color from 'css-color-function'
import formula from '@/constant/formula.json'
import axios from 'axios'

/**
 * 写入新样式到 style
 * @param {*} elNewStyle element-plus 的新样式
 */
export const writeNewStyle = (elNewStyle) => {
  const style = document.createElement('style')
  style.innerText = elNewStyle
  document.head.appendChild(style)
}

/**
 * 根据主色值，生成最新的样式表
 * @param {*} primaryColor
 */
export const generateNewStyle = async (primaryColor) => {
  // 生成色值表
  const colors = generateColors(primaryColor)
  // 获取 element-plus 样式文件
  let cssText = await getOriginalStyle()
  // 遍历生成的样式表 在 css 文件中进行全局替换
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(
      new RegExp('(:|\\s+)' + key, 'g'),
      '$1' + colors[key]
    )
  })
  return cssText
}

/**
 * 根据主色值生成色值表
 */
export const generateColors = (primary) => {
  if (!primary) return
  const colors = {
    primary
  }
  Object.keys(formula).forEach((key) => {
    const value = formula[key].replace(/primary/g, primary)
    colors[key] = '#' + rgbHex(color.convert(value))
  })
  return colors
}

const getOriginalStyle = async () => {
  // const version = require('element-plus/package.json').version
  const url = 'https://unpkg.com/element-plus/dist/index.css'
  const { data } = await axios(url)
  // 把获取到的数据筛选为原样式模板
  return getStyleTemplate(data)
}

const getStyleTemplate = (data) => {
  // element-plus 默认色值
  const colorMap = {
    '#3a8ee6': 'shade-1',
    '#409eff': 'primary',
    '#53a8ff': 'light-1',
    '#66b1ff': 'light-2',
    '#79bbff': 'light-3',
    '#8cc5ff': 'light-4',
    '#a0cfff': 'light-5',
    '#b3d8ff': 'light-6',
    '#c6e2ff': 'light-7',
    '#d9ecff': 'light-8',
    '#ecf5ff': 'light-9'
  }
  // 根据默认色值为要替换的色值打上标记
  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key]
    data = data.replace(new RegExp(key, 'ig'), value)
  })
  return data
}
