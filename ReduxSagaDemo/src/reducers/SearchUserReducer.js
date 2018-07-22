
import TypeAction from '../actions/TypeAction';
import _ from 'lodash';
const defaultFilterState = [];

export default searchUserReducer =(state = defaultFilterState, action)=>{
    if (action.type === TypeAction.SEARCH_USERS_RESULT){
        
        return action.searchUserResult;
    }
    return state;
}