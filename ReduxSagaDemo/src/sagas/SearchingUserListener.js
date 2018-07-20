import TypeAction from '../actions/TypeAction';
import {takeLatest,call,takeEvery,put,select} from 'redux-saga/effects';

import {searchUsers,setQueryUserState,setSearchUsersState} from '../actions/SearchUsersAction';


function  getUserListState (state) {
    return state.userList;
} 

function * searchUsersCallback(action){

    yield put(setQueryUserState(action.query));

    yield put(setSearchUsersState(true));
    
    let allUsers = yield select(getUserListState);

    yield put(searchUsers(action.query,allUsers));
    
    yield put(setSearchUsersState(false));
}

export default function* searchingUserListener(){
    yield takeLatest(TypeAction.SEARCH_USERS_REQUEST,searchUsersCallback);
}
