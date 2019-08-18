/*
 * @Description: request
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-04-12 16:40:16
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-18 18:31:01
 */
import fetchTimeout from '../../utils/fetchTimeout'

export let ATS = {}

export const buildRequestActionType = function(param) {
  let rat = {}

  if (Array.isArray(param)) {
    param.forEach(key => {
      rat[key] = buildRequestActionType(key)[key]
    })
  } else if (typeof param === 'string') {
    rat[param] = {
      REQUEST: `${param}_REQUEST`,
      SUCCESS: `${param}_SUCCESS`,
      FAILURE: `${param}_FAILURE`
    }
  }

  return rat
}

class RequestActions {
  constructor() {
    this.types = {}
  }

  allTypes() {
    return this.types
  }

  build(option) {
    option = Object.assign(
      {
        type: '',
        method: 'POST',
        params: null,
        endpoint: '',
        isrequest: true
      },
      option
    )

    if (!option.type || !option.endpoint) {
      console.error(
        'buildRequestAction Error-> type is null or endpoint is null !'
      )

      return null
    }

    let types = {
      REQUEST: `${option.type}_REQUEST`,
      SUCCESS: `${option.type}_SUCCESS`,
      FAILURE: `${option.type}_FAILURE`
    }

    this.types[option.type] = types

    return {...option, type: types.REQUEST}
  }
}

export const RequestAction = (function() {
  return new RequestActions()
})()

const checkStatus = response => {
  if (response.ok) {
    return response.json()
  }

  return Promise.reject({
    errcode: response.status,
    errmsg: response.statusText
  })
}

const handleResponse = json => {
  if (json) {
    console.log('json::', json)
    let code = String(json.code) || String(json.errcode)
    if (code === '0' || code === '200000') {
      return json
    } else {
      return Promise.reject({
        errcode: json.code || -1,
        errmsg: json.message || json.message || '发生未知异常！',
        errinfo: json
      })
    }
  } else {
    return Promise.reject({
      errcode: -1,
      errmsg: '网络异常，请稍后重试'
    })
  }
}

function getStringify(params) {
  const arr = []

  Object.keys(params).forEach(key => arr.push(`${key}=${params[key]}`))

  return arr.join('&')
}

export const callApi = ({
  endpoint,
  params,
  method = 'POST',
  options,
  timeout = 8000,
  globalParams
}) => {
  method = method.toUpperCase()

  let url = [window._global.prefixAPI,endpoint].join('')
  console.log("url>>>>>>>>>>>>>>>",url)
  const defaultOptions = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'channel-type': 'h5'
    },
    cache: 'no-store',
    credentials: 'include'
  }
  let _params = {},
    body

  if (globalParams) {
    _params = Object.assign(_params, globalParams)
  }

  if (method === 'GET') {
    _params = Object.assign({}, _params, params)

    if (url.search(/\?/) === -1) {
      url += `?${getStringify(_params)}`
    } else {
      url += `&${getStringify(_params)}`
    }
  } else if (method === 'POST') {
    _params = params

    body = JSON.stringify(_params)
  }

  const opt = Object.assign({}, defaultOptions, options, {body})

  return fetchTimeout(url, opt, timeout)
    .then(checkStatus)
    .then(handleResponse)
    .catch(({errcode, errmsg, errinfo}) =>
      Promise.reject({
        errcode: errcode || -1,
        errmsg: errmsg || '网络异常，请稍后重试',
        errinfo: errinfo || ''
      })
    )
}

export default store => next => action => {
  if (action.isrequest) {
    return callApi(action).then(
      response => {
        next({
          ...action,
          response,
          type: action.type.replace('REQUEST', 'SUCCESS')
        })

        return {
          code: response.code,
          message: response.message,
          data: response.result
        }
      },
      ({errcode, errmsg, errinfo}) => {
        next({
          ...action,
          errmsg,
          errcode,
          type: action.type.replace('REQUEST', 'FAILURE')
        })

        return {
          errmsg,
          errcode
        }
      }
    )
  } else {
    next(action)
  }
}
