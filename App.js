import React, { useCallback } from 'react';
import Home from "./screens/home";
import * as Font from 'expo-font';
import { useState } from "react";
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './routes/draw'



SplashScreen.preventAutoHideAsync();

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/NunitoSans_7pt-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/NunitoSans_7pt-Bold.ttf"),
  });

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    'nunito-bold': require('./assets/fonts/NunitoSans_7pt-Bold.ttf'),
    'nunito-regular': require('./assets/fonts/NunitoSans_7pt-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
   return(
      <Navigator onLayout={onLayoutRootView}/>
      // <Home onLayout={onLayoutRootView}/>
     
    );
    // <Home onLayout={onLayoutRootView} />

  // if (fontsLoaded) {
  //   return(
  //     <Home onLayout={onLayoutRootView} />
  //   );
  // } else {
  //   return (
  //     <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  //   );
  // }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
