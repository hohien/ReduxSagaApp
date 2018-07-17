

import {call,all,fork} from 'redux-saga/effects';
import fetchingUsersListener from './FetchingUserListener';
import searchUserListener from './SearchingUserListener';

export default function* (){
        // yield all([
        //         fork(fetchingUsersListener),
        //         call(searchUserListener),
        // ]);

       
        yield all([
                fork(fetchingUsersListener),
                fork(searchUserListener),
        ]) ;
        
        
}