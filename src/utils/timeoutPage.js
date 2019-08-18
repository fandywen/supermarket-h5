/*
 * @Description: timeoutPage
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-16 14:06:42
 */
let includeActionTypes = ['GET_TASK_LIST_FAILURE']

let listenerfun = null

let timeoutPage = {
  broadcastMsg: actiontype => {
    if (includeActionTypes.indexOf(actiontype) !== -1) {
      listenerfun && listenerfun()

      return true
    }

    return false
  },

  listener: fun => {
    listenerfun = fun
  }
}

export default timeoutPage
