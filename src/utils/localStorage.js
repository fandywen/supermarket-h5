/*
 * @Description: localStorage
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-16 14:08:00
 */
const mainkey = 'yh_home_'

export default {
  get(key) {
    let strval = localStorage.getItem(mainkey + key)

    if (!strval) {
      return null
    }

    let json = JSON.parse(strval)

    if (json.overtime > new Date().getTime() || json.overtime === -1) {
      return json.data
    } else {
      return null
    }
  },

  set(key, val, overtime) {
    if (overtime > -1) {
      overtime = new Date().getTime() + overtime * 1000
    }

    let json = {
      data: val,
      overtime
    }

    localStorage.setItem(mainkey + key, JSON.stringify(json))
  },

  remove(key) {
    localStorage.removeItem(mainkey + key)
  },

  clear() {
    localStorage.clear()
  }
}
