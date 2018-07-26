

import {call,all,fork} from 'redux-saga/effects';

import fetchingUsersListener from './FetchingUserListener';

import searchUserListener from './SearchingUserListener';

import sortingUserListener from './SortingUserList';

import fetchingSuccess from './FetchingUserSuccess';


export default function* (){
       
        yield all([
                searchUserListener(),
                fetchingSuccess(),
                sortingUserListener(),
                fork(fetchingUsersListener),
        ]);
}