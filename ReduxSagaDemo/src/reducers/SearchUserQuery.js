
import TypeAction from '../actions/TypeAction';

const isSearchingStateDefault = "";

export default searchUserQueryState = (state = isSearchingStateDefault , action )=>{
    if (action.type === TypeAction.SEARCH_USERS_REQUEST){
        return action.query;
    }
    return state;
}