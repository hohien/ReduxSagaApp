import TypeAction from '../actions/TypeAction';

import {put,call,takeLatest,select,takeEvery} from 'redux-saga/effects';

import {
    fetchingUsersState,
    fetchingUsersSuccess,
    fetchingUsersFailure} from '../actions/FetchingUserAction';

import {getUsersApi} from '../apis/UsersApi';


function* fetchingUserCallBack(){

    yield put(fetchingUsersState(true));

    try {
        const userList = yield call(getUsersApi);
        yield put(fetchingUsersSuccess(userList)); 
    } catch (error) {
        yield put(fetchingUsersFailure(error));
    } finally {
        yield put(fetchingUsersState(false));
    }
}


export default function* fetchingUsersListener(){
    yield takeLatest(TypeAction.FETCHING_USERS_REQUEST,fetchingUserCallBack);
}