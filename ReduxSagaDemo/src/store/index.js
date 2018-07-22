
import {createStore,applyMiddleware} from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers/index';
import rootSaga from '../sagas/RootSaga';


export default ()=>{
    const sagaMiddleware  = createSagaMiddleware();
    let store = createStore(reducers, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}



