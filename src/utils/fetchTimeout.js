/*
 * @Description:fetchTimeout
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-16 13:42:02
 */
function timeoutPromise(promise, timeout, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(error)
    }, timeout)
    promise.then(resolve, reject)
  })
}

/**
 * node-fetch wrapper that adds the possibility to set a timeout after which
 * a custom error is returned.
 * @param  {string} url     url to pass to node-fetch
 * @param  {object} options options to pass to node-fetch
 * @param  {number} timeout maximum acceptable timeout before considering the request as failed
 * @param  {string} error   custom error string after the timeout is expired
 * @return {Promise}
 */
export default function fetchTimeout(url, options, timeout = 8000, error) {
  error = error || {
    errcode: -2,
    errmsg: '请求超时，请稍后重试'
  }
  options = options || {}
  timeout = timeout || 10000
  return timeoutPromise(fetch(url, options), timeout, error)
}
