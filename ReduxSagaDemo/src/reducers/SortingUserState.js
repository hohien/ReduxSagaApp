
import TypeAction from '../actions/TypeAction';

const isSortingUsersDefault = false;

export default sortingUserState = (state = isSortingUsersDefault , action )=>{
    if (action.type === TypeAction.SORT_USERS_STATE){
        return action.isSortingUsers;
    }
    return state;
}