
import {combineReducers} from 'redux';

import fetchingUsers from './FetchingUserReducer';
import fetchingUserError from './FetchingUserError';
import fetchingUserState from './FetchingUserState';

import searchUserState from "./SearchUserState";
import searchUsers from './SearchUserReducer';
import searchUsersQuery from './SearchUserQuery';

import sortingUsersState from "./SortingUserState";
import sortingUsersType from './SortingUserType';

export default combineReducers({

    isFetchingUsers     :fetchingUserState,
    fetchingUsersError  :fetchingUserError,
    userList            :fetchingUsers,

    searchUserQuery     :searchUsersQuery,
    isSearchingUsers    :searchUserState,
    searchUserResult    :searchUsers,

    isShortingUsers     :sortingUsersState,
    sortingUsersType    :sortingUsersType,


});