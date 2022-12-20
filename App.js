import { useFonts } from "expo-font";
import { Platform } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { THEME } from './src/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeNavigator from './src/navigation/HomeNavigation';
import BookedNavigation from "./src/navigation/BookedNavigation";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// SplashScreen.preventAutoHideAsync();

// const Stack = createNativeStackNavigator();

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
      <Tab.Navigator
        activeColor={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
        inactiveColor={'gray'}
        shifting={true}
        barStyle={{ 
          backgroundColor: THEME.MAIN_COLOR
          
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused
                ? 'ios-albums'
                : 'ios-albums-outline';
              } else if (route.name === 'Booked') {
                iconName = focused
                ? 'star'
                : 'star-outline';
              }
    
              return <Ionicons name={iconName} size={20} color={color} />;
          },
          // tabBarActiveTintColor: THEME.MAIN_COLOR,
          // tabBarInactiveTintColor: "gray",
          // headerShown: false,
      })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeNavigator} 
          options={{
            // tabBarIcon: ({ focused, color, size }) => <Ionicons name='ios-albums' size={20} color={THEME.MAIN_COLOR}/>
            tabBarLabel: 'Все'
          }}
        />
        <Tab.Screen name="Booked" component={BookedNavigation} options={{tabBarLabel: 'Избранное'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}