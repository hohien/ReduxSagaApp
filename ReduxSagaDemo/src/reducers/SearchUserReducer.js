
import TypeAction from '../actions/TypeAction';
import _ from 'lodash';
const defaultFilterState = [];

export default searchUserReducer =(state = defaultFilterState, action)=>{
    if (action.type === TypeAction.SEARCH_USERS){
        action.query =action.query.replace(/\s+/g, '').toLowerCase();
        if (action.query.length === 0){
            return action.userList?action.userList:[];
        }
        return _.filter(action.userList,user =>{
            let condition = user.name.last+user.name.name+user.email;
            condition = condition.toLowerCase();
            return condition.indexOf(action.query)>=0;
        });
    }
    return state;
}