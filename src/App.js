/*
 * @Description: App
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-18 20:36:48
 */
import React, {Component} from 'react'
import RouterMap from './router'
import {Provider} from 'react-redux'
// import 'babel-polyfill';
import store from './redux/store'
import './App.css'
// import {initWx} from './utils/wx.js'
class App extends Component {
  componentDidMount() {
    // initWx()
  }

  render() {
    return (
      <Provider store={store}>
        <RouterMap />
      </Provider>
    )
  }
}

export default App
