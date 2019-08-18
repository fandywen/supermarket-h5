/*
 * @Description:reducer
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-08-15 20:22:21
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-17 16:48:10
 */
// import {
//   GET_USER_INFO_REQUEST,
//   GET_USER_INFO_SUCCESS,
//   GET_USER_INFO_FAIL
// } from 'actions/userInfo'

const initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: ''
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case 'GET_USER_INFO_REQUEST':
      return {
        ...state,
        isLoading: true,
        userInfo: {},
        errorMsg: ''
      }
    case 'GET_USER_INFO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        userInfo: action.response.result,
        errorMsg: ''
      }
    case 'GET_USER_INFO_FAILURE':
      return {
        ...state,
        isLoading: false,
        userInfo: {},
        errorMsg: action.errmsg
      }
    default:
      return state
  }
}
