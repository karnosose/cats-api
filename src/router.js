import React from 'react';
import {Switch} from 'react-router-dom';
import MainRouter from './components/AppRouter/MainRouter';
import MainLayout from './components/layouts/MainLayout';
import App from './components/App'

const Router = _ => {
    return (
        <Switch>
            <MainRouter exact path='/' layout={MainLayout} component={App} />
            <MainRouter exact path='/:id' layout={MainLayout} component={App} />

        </Switch>
    )
}

export default Router;