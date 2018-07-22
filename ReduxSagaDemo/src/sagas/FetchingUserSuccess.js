import TypeAction from '../actions/TypeAction';
import {put,call,takeLatest,select,takeEvery} from 'redux-saga/effects';

import {searchUsersRequest} from '../actions/SearchUsersAction';

function getUserQueryState (state){
    return state.searchUserQuery;
}

function * onFetchingUserSuccessCallback(action){
    if (!action.isFetching){
        let query = yield select(getUserQueryState);
        yield put(searchUsersRequest(query));
    }
    
}

export default function* fetchingUserSuccessListener(){
    yield takeLatest(TypeAction.FETCHING_USERS_STATE,onFetchingUserSuccessCallback);
}