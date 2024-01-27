import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";


export default function ReviewDetails({navigation}){

    const pressHandler = ()=>{
        navigation.goBack() //pos screen
    }
    return(
        <View style={ globalStyles.container}>
            <Text>Review Details screen</Text>
            <Button title="back to home screen" onPress={pressHandler}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24,
    }
})