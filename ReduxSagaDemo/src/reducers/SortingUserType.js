import TypeAction from '../actions/TypeAction';
import {INCREASE} from '../actions/SortingUsersActions';
const sortType = INCREASE;

export default sortingUserType = (state = sortType , action )=>{
    if (action.type === TypeAction.SORT_USERS_REQUEST){
        return action.typeSort;
    }
    return state;
}