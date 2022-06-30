import React, { useState, useEffect } from 'react';
import * as SplashScreen from "expo-splash-screen";
import { LogBox } from "react-native";

import MainNavigator from './navigation/MainNavigator';


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  LogBox.ignoreLogs(["EventEmitter.removeListener"]);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // await Font.loadAsync({
        //   "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        //   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        // });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        await SplashScreen.hideAsync();

        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [appIsReady]);

  if(!appIsReady) {
    return null;
  }

  return (
      <MainNavigator />
  );
}
