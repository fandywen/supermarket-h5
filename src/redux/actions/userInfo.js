/*
 * @Description:
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-08-15 20:20:01
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-18 18:16:26
 */
import {RequestAction} from '../middleware/request'
let productCode = 997447
let storeCode = 9191
let raCanExchangeGoods = RequestAction.build({
  type: 'GET_USER_INFO',
  method: 'GET',
  endpoint: '/app/product/queryProductDetailByCode'
})
/**
 * 获取我能兑换的商品列表
 * @param {当前页数}
 */
export let getICanExchangeGoods = () => dispatch => {
  dispatch({type: 'GET_USER_INFO', loading: true})

  dispatch({...raCanExchangeGoods, params: {productCode, storeCode}})
}
