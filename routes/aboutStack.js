import {createStackNavigator} from 'react-navigation-stack';
import about from '../screens/about'


const screens = {
    Home:{
        screen:about,
        navigationOptions:{
            title:"About Gamezone",
        }
    },
   
}
const AboutStack = createStackNavigator(screens,
    {
        defaultNavigationOptions:{
            headerTintColor:'#444',
            headerStyle:{backgroundColor:'#eee', height:60}

        }
    });

export default AboutStack;