import { useFonts } from "expo-font";
import { Platform } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { THEME } from './src/theme';
import { createBottomTabNavigator, createAppContainer } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeNavigator from './src/navigation/HomeNavigation';
import BookedNavigation from "./src/navigation/BookedNavigation";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import 'react-native-gesture-handler';
import AppBottomNavigation from "./src/navigation/AppBottomNavigation";
import MyDrawer from "./src/navigation/MyDrawer";

// SplashScreen.preventAutoHideAsync();

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()
// const Tab = createBottomTabNavigator()

export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'open-bold': require("./assets/fonts/OpenSans-Bold.ttf"),
  //   'open-regular': require("./assets/fonts/OpenSans-Regular.ttf")
  // })

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if(!fontsLoaded) {
  //   return null
  // }

  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}