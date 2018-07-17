import TypeAction from '../actions/TypeAction';

export default setFetchingUserState =(isFetching = false, action )=>{
    if (action.type === TypeAction.FETCHING_USERS_STATE){
        return action.isFetching;
    }  
    return isFetching;
} 
