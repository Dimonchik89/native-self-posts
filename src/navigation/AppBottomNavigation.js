import { Platform, View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator, createAppContainer } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeNavigator from "./HomeNavigation";
import BookedNavigation from "./BookedNavigation";
import { THEME } from "../theme";

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()

const AppBottomNavigation = () => {

    return (
        <Tab.Navigator
            activeColor={Platform.OS === "android" ? THEME.MAIN_COLOR : THEME.MAIN_COLOR}
            inactiveColor={'gray'}
            shifting={true}
            barStyle={{ 
              backgroundColor: THEME.MAIN_COLOR,
            }}
            screenOptions={({ route }) => ({
              tabBarShowLabel: false,
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
        
                return <Ionicons name={iconName} size={20} color={color} />
            },
            // tabBarActiveTintColor: "#fff",
            // tabBarInactiveTintColor: "#fff",
            // headerShown: false,
        })}
        >
        <Tab.Screen 
          name="Home" 
          component={HomeNavigator} 
          options={{
            // tabBarIcon: ({ focused, color, size }) => <Ionicons name='ios-albums' size={20} color={THEME.MAIN_COLOR}/>
            tabBarLabel: 'Все',
            color: "#fff"
          }}
        />
        <Tab.Screen name="Booked" component={BookedNavigation} options={{tabBarLabel: 'Избранное'}}/>
      </Tab.Navigator>
    )
}
export default AppBottomNavigation;