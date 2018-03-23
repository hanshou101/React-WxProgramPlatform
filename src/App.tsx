/**
 * 原生React区域
 */
import * as React from 'react'
import * as ReactDOM from "react-dom"

/**
 * Redux区域
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'


/**
 * Router区域
 */
// import { Router, Route  /* , browserHistory */ } from 'react-router'    //react-router-dom更为强大，先进
import { HashRouter, /* Router, */ Route, Link, Switch, Redirect } from 'react-router-dom'    //如果你要Router，必须添加histroy属性
import {  /*syncHistoryWithStore ,*/ routerReducer } from 'react-router-redux'

/**
 * 用Router_4.0+history+Redux，实现“时间旅行”
 */
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'        //引入时间旅行的新组件
import createHistory from 'history/createBrowserHistory'

/**
 * 自己写的Reducer
 */
var my_reducer_list = require('./redux_logic/Reducers')

/**
 * [在store建立之前]
 * 创建“时间旅行”的history历史。（比如浏览器的历史进程）
 */
const history = createHistory()

/**
 * [在store建立之前]
 * 创建中间件，进行“时间旅行”的Navigatioin导航的拦截和分发Actions操作
 */
const middleware = routerMiddleware(history)


/**
 * 用Reducer，初始化Store
 */
const my_store = createStore(
    combineReducers({
        ...my_reducer_list,
        routing: routerReducer
    }),
    //额外功能：这里是和“时间旅行”的history相关的
    applyMiddleware(middleware)
)

/**
 * 自己的一些Component
 */
var Home = require('./components/home_page/Home').default

var css = require('./css/App.css')


/**
 * 进行渲染：
 * 1.最外层，Provider，参数设置为自己的store
 * 2.
 * 3.
 */
var render_fun = () => ReactDOM.render(
    <Provider store={my_store}>
        <ConnectedRouter history={history}>
            {/* <div> */}
            <div className={css.test}>
                <ol>
                    <li><Link to="/">to 首页</Link></li>
                    <li><Link to="/about" >to 关于</Link></li>
                    <li><Link to="/topics" >to 主题</Link></li>
                    <li><Link to="/404" >to 错误</Link></li>
                </ol>

                <button onClick={() =>
                    my_store.dispatch({
                        type: 'ADD',
                        payload: 2
                    })
                }>切换回调：加法</button>

                <button onClick={() =>
                    my_store.dispatch({
                        type: 'DEDUCE',
                        payload: 1
                    })
                }>切换回调：减法</button>

                <button onClick={() =>
                    my_store.dispatch({
                        type: 'MULTI',
                        payload: 1.5
                    })
                }>切换回调：乘法</button>

                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}
                    {/* <Redirect to="/404" /> */}
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('content'))

render_fun()            //手动调用整体渲染方法。

/**
 * 为Store，添加每次dispatch分发时的触发回调函数
 */

const unsubscribe_fun = my_store.subscribe(
    () => {
        render_fun()
        log_fun()
    }
)
// unsubscribe_fun()               //手动解除Store的触发回调函数。


/**
 * State的Log日志。
 */
var log_fun = () => {
    const cur_state = my_store.getState()
    console.log("new state : " + JSON.stringify(cur_state["math"]));
}