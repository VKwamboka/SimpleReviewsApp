import React from "react";
import { StyleSheet, View, Text , Button} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({navigation}){

    const pressHandler = ()=>{
        navigation.navigate('ReviewDetails')
        // or navigation.push('ReviewDetails') if you have so many pages
        // or 
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
            <Button title="go to review dets" onPress={pressHandler}/>
        </View>
    )
}

