/*
 * @Description:UserInfo
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-08-15 20:29:41
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-17 20:02:10
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getICanExchangeGoods} from '../../redux/actions/userInfo'
//import '../../assets/css/global'
class UserInfo extends Component {
  componentWillMount() {}
  componentDidMount() {
    this.props.getICanExchangeGoods()
  }
  render() {
    const {
      userInfo: {userInfo, isLoading, errorMsg}
    } = this.props
    return (
      <div>
        {isLoading
          ? '请求信息中......'
          : errorMsg || (
            <div className="fc-r">
              <p>商品信息：</p>
              <p>
                  商品名：
                {userInfo.resChannelStoreProductVO
                  ? userInfo.resChannelStoreProductVO.productName
                  : ''}
              </p>
              <p>
                  介绍：
                {userInfo.resChannelStoreProductVO
                  ? userInfo.resChannelStoreProductVO.originPlace
                  : ''}
              </p>
            </div>
          )}
        <button onClick={() => getICanExchangeGoods()}>请求商品基本信息</button>
      </div>
    )
  }
}

export default connect(
  state => ({userInfo: state.userInfo}),
  {getICanExchangeGoods}
)(UserInfo)
