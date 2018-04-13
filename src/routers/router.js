import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Loading from '../components/Loading' ;
import Loadable from 'react-loadable';

const AsyncHome = Loadable({
    loader: () => import("../pages/Home/View"),
    loading: Loading
});

const index = Loadable({
    loader: () => import("../pages/Index/View"),
    loading: Loading
});

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={AsyncHome}/>
            <Route exact path='/index' component={index}/>
        </Switch>
    </HashRouter>
)