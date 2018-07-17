
import TypeAction from '../actions/TypeAction';

const defaultFilterState = [];

export default searchUserReducer =(state = defaultFilterState, action)=>{
    if (action.type === TypeAction.SEARCH_USERS_RESULT){
        
        return action.searchingUsersResult;
    }
    return state;
}