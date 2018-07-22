
import React,{Component} from 'react';

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import UsersScreen from './src/scenes/user/UsersScreen';

import {Provider} from 'react-redux';

import store from './src/store/index';




const App = ()=>{

    return(
        <Provider store ={store()}>
            <UsersScreen />
        </Provider>
    );

}

AppRegistry.registerComponent(appName, () => App);
