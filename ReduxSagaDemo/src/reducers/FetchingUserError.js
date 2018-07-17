import TypeAction from '../actions/TypeAction';

export default setFetchingUserError =(error = "", action )=>{
    if (action.type === TypeAction.FETCHING_USERS_FAILURE){
        return action.error;
    }  
    return error;
} 