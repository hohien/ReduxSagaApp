
import UsersScreen from '../scenes/user/UsersScreen'
import UserDetailScreen from '../scenes/userDetail/UserDetailScreen';
import {createStackNavigator} from 'react-navigation'

export default createStackNavigator(
    {
        UserScreen:{
            screen:UsersScreen
        },
        UserDetailScreen:{
            screen:UserDetailScreen
        }
    },{
        initialRouteName: "UserScreen",
    }
)