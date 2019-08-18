/*
 * @Description: rests
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-16 13:38:20
 */
import {Toast} from 'antd-mobile'

import timeoutPage from '../../utils/timeoutPage'

export default store => next => action => {
  if (action.isrequest && /\s*_FAILURE/.test(action.type)) {
    console.log(`request error endpoint-->${action.endpoint}`)

    console.log(`error msg -> ${action.errmsg}\n\n`)

    if (action.errcode === -2 && timeoutPage.broadcastMsg(action.type)) {
      console.log('display timeout page')
    } else if (
      typeof action.errmsg === 'string' &&
      action.type !== 'GET_USER_INFO_FAILURE'
    ) {
      Toast.info(action.errmsg)
    }
  }

  if (action.isrequest && action.callback) {
    setTimeout(() => {
      action.callback(action.response)
    }, 16)
  }

  return next(action)
}
