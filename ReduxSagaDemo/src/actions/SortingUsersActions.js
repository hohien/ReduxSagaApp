import TypeAction from './TypeAction';

export const INCREASE ="increase"; 
export const DECREASE ="decrease"; 


export const sortingUsersRequest =(typeSort)=>{
    return {
        type: TypeAction.SORT_USERS_REQUEST,
        typeSort
    }
}

export const setSortingUsersState = (isSortingUsers) =>{
    return {
        type:TypeAction.SORT_USERS_STATE,
        isSortingUsers
    }
}
