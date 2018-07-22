
import TypeAction from '../actions/TypeAction';

const queryDefault = "";

export default searchUserQueryState = (state = queryDefault , action )=>{
    if (action.type === TypeAction.SEARCH_USERS_REQUEST){
        return action.query;
    }
    return state;
}