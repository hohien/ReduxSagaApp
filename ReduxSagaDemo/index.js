
import React,{Component} from 'react';

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';



import {Provider} from 'react-redux';

import store from './src/store/index';

import AppRouter from './src/routers/index';


const App = ()=>{

    return(
        <Provider store ={store()}>
            <AppRouter />
        </Provider>
    );

}

AppRegistry.registerComponent(appName, () => App);
