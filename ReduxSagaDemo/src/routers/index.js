
import UsersScreen from '../scenes/user/UsersScreen'
import UserDetailScreen from '../scenes/userDetail/UserDetailScreen'
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation'
import {Icon} from 'react-native-elements';
import LocationScreen from '../scenes/location/LocationScreen'
import IdeaScreen from '../scenes/idea/IdeaScreen'
let Home = createStackNavigator(
    {
        UserScreen:{
            screen:UsersScreen,
            navigationOptions:{
                header:null
            }
        },
        UserDetailScreen:{
            screen:UserDetailScreen,
            navigationOptions:{
                header:null
            }
        }
    },{
        initialRouteName:"UserScreen"
    }
);

let routeConfig = {
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            tabBarIcon:()=>{

            }
        }
    },
    IdeaScreen:{
        screen:IdeaScreen
    },
    LocationScreen:{
        screen:LocationScreen
    },

}

let tabNavigatorConfig = {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,
}

export default createBottomTabNavigator(routeConfig,tabNavigatorConfig)