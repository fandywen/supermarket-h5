/*
 * @Description:CombineReducers
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-08-15 18:57:53
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-17 20:46:03
 */
import {combineReducers} from 'redux'
import userInfo from './reducers/userInfo'

export default combineReducers({
  userInfo
})
