






import TypeAction from '../actions/TypeAction';

import {put,select,call,takeLatest,takeEvery} from 'redux-saga/effects';


import {
    INCREASE,DECREASE,
    setSortingUsersState} from '../actions/SortingUsersActions';

import {setSearchUserResult} from '../actions/SearchUsersAction';

function compareFistNameIncrease(userA,userB){
    if (userA.name.first>userB.name.first){
        return 1;
    }
    if (userA.name.first<userB.name.first){
        return -1;
    }
    return 0;
}

function compareFistNameDecrease(userA,userB){
    if (userA.name.first>userB.name.first){
        return -1;
    }
    if (userA.name.first<userB.name.first){
        return 1;
    }
    return 0;
}

function  getSearchUserResult (state) {
    return state.searchUserResult;
} 


function* sortingUserListCallBack(action){

    yield put(setSortingUsersState(true));

    let userList = yield select(getSearchUserResult);

    switch(action.typeSort){
        case DECREASE:{
            userList.sort(compareFistNameDecrease);
            break;
        }
        case INCREASE:{
            userList.sort(compareFistNameIncrease);
            break;
        }
    }

    yield put(setSortingUsersState(false));

    yield put(setSearchUserResult(userList));
}


export default function* sortingUserListListener(){
    yield takeLatest(TypeAction.SORT_USERS_REQUEST,sortingUserListCallBack);
}