
import TypeAction from '../actions/TypeAction';

const isSearchingStateDefault = false;
export default searchUserState = (state = isSearchingStateDefault , action )=>{
    if (action.type === TypeAction.SEARCH_USERS_STATE){
        return action.isSearchingUsers;
    }
    return state;
}