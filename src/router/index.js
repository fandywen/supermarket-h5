/*
 * @Description:router
 * @Company: yh
 * @Author: yuwen.liu
 * @Date: 2019-08-15 15:47:30
 * @LastEditors: yuwen.liu
 * @LastEditTime: 2019-08-17 16:39:42
 */
import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Page from '../pages/Page/Page'
import UserInfo from '../pages/UserInfo/UserInfo'
const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page">Page</Link>
        </li>
        <li>
          <Link to="/userinfo">UserInfo</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page" component={Page} />
        <Route path="/userinfo" component={UserInfo} />
      </Switch>
    </div>
  </Router>
)
export default getRouter
