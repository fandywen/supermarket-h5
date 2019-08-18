/*
 * @Description: testmidddle
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-16 13:39:36
 */
import {Toast} from 'antd-mobile'

export default store => next => action => {
  if (action.isrequest && /\s*_FAILURE/.test(action.type)) {
    Toast.info(action.errmsg, 1)
  }

  return next(action)
}
