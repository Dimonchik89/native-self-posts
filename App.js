import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import { Platform } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, createAppContainer } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import 'react-native-gesture-handler';
import MyDrawer from "./src/navigation/MyDrawer";
import { Provider } from "react-redux";
import store from "./src/store";
import { DB } from "./src/db";

// SplashScreen.preventAutoHideAsync();

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()
// const Tab = createBottomTabNavigator()

export default function App() {


  const [fontsLoaded] = useFonts({
    'open-bold': require("./assets/fonts/OpenSans-Bold.ttf"),
    'open-regular': require("./assets/fonts/OpenSans-Regular.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const dbInit = async() => {
    await DB.init()
  }

  useEffect(() => {
    dbInit()
  }, [])

  if(!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyDrawer onLayout={onLayoutRootView}/>
      </NavigationContainer>
    </Provider>
  );
}