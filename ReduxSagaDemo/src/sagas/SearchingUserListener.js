import TypeAction from '../actions/TypeAction';
import {takeLatest,takeEvery,put,select} from 'redux-saga/effects';

import {searchUsersResult,setSearchUsersState} from '../actions/SearchUsersAction';

import _ from 'lodash';

export const getUserListState = state => state.userList;

export function * searchUsersCallback(action){
    yield put(setSearchUsersState(true));
    let allUsers = yield select(getUserListState);
    let usersQuery ;

    let query = yield action.query;
    
    query = yield query.replace(/\s+/g, '').toLowerCase();

    if (query.length === 0){
        usersQuery = allUsers;
    } else {
        usersQuery = yield _.filter(allUsers, user =>{
            let queryString =  user.name.first+user.name.last+user.email;
            queryString = queryString.toLowerCase();
        
            return queryString.indexOf(query)>=0 ;
        });
    }
    yield put(setSearchUsersState(false));
    yield put(searchUsersResult(usersQuery));
}

export default function* searchingUserListener(){
    yield takeLatest(TypeAction.SEARCH_USERS_REQUEST,searchUsersCallback);
}
