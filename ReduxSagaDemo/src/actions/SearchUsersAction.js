import TypeAction from './TypeAction';



export const searchUsersRequest =(query)=>{
    return {
        type: TypeAction.SEARCH_USERS_REQUEST,
        query
    }
}

export const searchUsers = (query, userList) =>{
    return {
        type:TypeAction.SEARCH_USERS,
        query,
        userList
    }
}

export const setSearchUsersState = (isSearchingUsers) =>{
    return{
        type:TypeAction.SEARCH_USERS_STATE,
        isSearchingUsers
    }
}

export const setQueryUserState = (query) =>{
    return {
        type:TypeAction.SEARCH_USERS_QUERY,
        query
    }
}