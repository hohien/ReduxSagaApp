

import {call,all,fork} from 'redux-saga/effects';
import fetchingUsersListener from './FetchingUserListener';
import searchUserListener from './SearchingUserListener';

export default function* (){
       
        yield [
                call(fetchingUsersListener),
                call(searchUserListener),
        ];
        
        
}