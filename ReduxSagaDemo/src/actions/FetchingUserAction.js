import TypeAction from './TypeAction';

export const fetchingUsersRequest = ()=>{
    return{
        type:TypeAction.FETCHING_USERS_REQUEST
    }
}

export const fetchingUsersSuccess = (userList) =>{
    return{
        type: TypeAction.FETCHING_USERS_SUCCESS,
        userList
    }
}

export const fetchingUsersFailure = (error) =>{
    return{
        type: TypeAction.FETCHING_USERS_FAILURE,
        error
    }

}

export const fetchingUsersState = (isFetching) =>{
    return{
        type: TypeAction.FETCHING_USERS_STATE,
        isFetching
    }

}
