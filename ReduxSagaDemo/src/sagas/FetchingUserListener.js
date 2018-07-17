import TypeAction from '../actions/TypeAction';

import {put,call,takeLatest,takeEvery} from 'redux-saga/effects';


import {
    fetchingUsersState,
    fetchingUsersSuccess,
    fetchingUsersFailure} from '../actions/FetchingUserAction';

import{
    searchUsersRequest
} from '../actions/SearchUsersAction';
import {getUsersApi} from '../apis/UsersApi';

function* fetchingUserCallBack(){

    yield put(fetchingUsersState(true));

    try {
        const userList = yield call(getUsersApi);

        yield put(fetchingUsersState(false));
        yield put(fetchingUsersSuccess(userList));

    } catch (error) {
        yield put(fetchingUsersState(false));
        yield put(fetchingUsersFailure(error));
        
    }
    yield put(searchUsersRequest(""));
}


export default function* fetchingUsersListener(){
    yield takeLatest(TypeAction.FETCHING_USERS_REQUEST,fetchingUserCallBack);
}