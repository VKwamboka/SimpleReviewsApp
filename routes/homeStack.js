import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/rewiewDetails';


const screens = {
    Home:{
        screen:Home,
        navigationOptions:{
            title:"Gamezone",
            // headerStyle:{backgroundColor:'#eee'}
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        // navigationOptions:{
        //     // headerStyle:{backgroundColor:'#eee'}
        // }
    }
}
const Homestack = createStackNavigator(screens,
    {
        defaultNavigationOptions:{
            headerTintColor:'#444',
            headerStyle:{backgroundColor:'#eee', height:60}

        }
    });

export default Homestack;