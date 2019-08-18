/*
 * @Description: store
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-08-15 18:58:11
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-16 13:58:29
 */
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import combineReducers from './reducers'
import request from './middleware/request'
import rests from './middleware/rests'
const store = createStore(
  combineReducers,
  applyMiddleware(thunkMiddleware, request, rests)
)

export default store
