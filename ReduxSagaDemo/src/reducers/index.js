
import {combineReducers} from 'redux';
import fetchingUsers from './FetchingUserReducer';
import fetchingUserError from './FetchingUserError';
import fetchingUserState from './FetchingUserState';
import searchUserState from "./SearchUserState";
import searchUser from './SearchUserReducer';
import searchUserQuery from './SearchUserQuery';

export default combineReducers({

    isFetchingUsers     :fetchingUserState,
    fetchingUsersError  :fetchingUserError,
    userList            :fetchingUsers,

    searchUserQuery     :searchUserQuery,
    isSearchingUsers    :searchUserState,
    searchingUserResult :searchUser,
});