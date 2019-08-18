/*
 * @Description: webpack配置文件
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-24 09:52:03
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-17 20:16:48
 */
// index.js
//import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker';
//import vConsole from 'vconsole'
import './assets/font/iconfont.css'
import './assets/css/global.scss'
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
window.getQueryString = name => {
  let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')

  let r = window.location.search.substr(1).match(reg)

  if (r != null) return unescape(r[2])

  return null
}

// if (window._global.env === 'dev' || window._global.env === 'qa') {
//   new vConsole()
// }
// 还需要在主要的js文件里写入下面这段代码
if (module.hot) {
  // 实现热更新
  module.hot.accept()
}
