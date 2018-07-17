import TypeAction from './TypeAction';

export const searchUsersRequest =(query)=>{
    return {
        type: TypeAction.SEARCH_USERS_REQUEST,
        query
    }
}
export const searchUsersResult = (searchingUsersResult) =>{
    return {
        type:TypeAction.SEARCH_USERS_RESULT,
        searchingUsersResult
    }
}

export const setSearchUsersState = (isSearchingUsers) =>{
    return{
        type:TypeAction.SEARCH_USERS_STATE,
        isSearchingUsers
    }
}