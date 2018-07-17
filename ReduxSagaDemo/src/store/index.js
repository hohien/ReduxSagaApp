
import {createStore,applyMiddleware} from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers/index';
import rootSaga from '../sagas/RootSaga';
const sagaMiddleware  = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

