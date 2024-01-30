import { createDrawerNavigator } from "@react-navigation/drawer";
import {createAppContainer} from 'react-navigation';
import AboutStack from "./aboutStack";
import Homestack from "./homeStack";



const RootDrawerNavigation = createDrawerNavigator(
    {
    Home:{
        screen:Homestack,
        
    },
    ReviewDetails:{
        screen:AboutStack,
        
    },
});


export default createAppContainer(RootDrawerNavigation)