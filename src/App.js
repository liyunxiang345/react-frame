import React from 'react';
import loadable from './utils/loadable';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import './style/base.scss'
import './style/App.scss'

const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))
const Login = loadable(() => import(/* webpackChunkName: '404' */ './views/base/Login'))
const View404 = loadable(() => import(/* webpackChunkName: '404' */ './views/base/404'))


const App = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact render={() => <Redirect to='/index' />}/>
            <Route path="/404" component={View404} />
            <Route path="/login" component={Login} />
            <Route component={DefaultLayout} />
        </Switch>
    </HashRouter>
)

export default App;
