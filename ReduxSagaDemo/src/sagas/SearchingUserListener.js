import TypeAction from '../actions/TypeAction';
import {takeLatest,call,takeEvery,put,select} from 'redux-saga/effects';

import {setSearchUserResult,setSearchUsersState} from '../actions/SearchUsersAction';

import _ from 'lodash';

function  getUserListState (state) {
    return state.userList;
} 

function filterUser (query,userList){
    query = query.replace(/\s+/g, '').toLowerCase().trim();
    if (query.length === 0){
        return userList?userList:[];
    }
    return _.filter(userList,user =>{
        let condition = user.name.last+user.name.first+user.email;
        condition = condition.toLowerCase();
        return condition.includes(query);
    });
}

function * searchUsersCallback(action){
    console.log(`searchUsersCallback ${action}`);
    yield put(setSearchUsersState(true));
    
    let allUsers = yield select(getUserListState);
    
    let searchUserResult = filterUser(action.query,allUsers);

    yield put(setSearchUserResult(searchUserResult));

    yield put(setSearchUsersState(false));
    
    
}

export default function* searchingUserListener(){
    yield takeLatest(TypeAction.SEARCH_USERS_REQUEST,searchUsersCallback);
}
