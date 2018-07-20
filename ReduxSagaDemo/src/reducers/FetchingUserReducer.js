import TypeAction from '../actions/TypeAction';

const defaultUserList = [];

export default fetchingUsers =(state = defaultUserList,action)=>{

    switch(action.type){
        case TypeAction.FETCHING_USERS_SUCCESS:{
            return action.userList;
        }
        case TypeAction.FETCHING_USERS_FAILURE:{
            return [];
        }
        default:{
            return state;
        }
    }
}