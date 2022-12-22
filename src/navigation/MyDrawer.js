import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppBottomNavigation from './AppBottomNavigation';
import AboutNavigator from './AboutNavigator';
import CreateNavigator from './CreateNavigator';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../theme';

const Drawer = createDrawerNavigator();

function DrawerView({navigation}) {

    return (
        <View style={styles.wrap}>
            <Button title="About" onPress={() => navigation.navigate("About")}/>
            <Button title="Create" onPress={() => navigation.navigate("Create")}/>
        </View>
    )
}

const MyDrawer = () => {

    return (
        <Drawer.Navigator 
            // drawerContent={props => <DrawerView {...props}/>}
            screenOptions={{ 
                headerShown: false,
                drawerActiveTintColor: THEME.MAIN_COLOR
            }}
            
        >
            <Drawer.Screen 
                name='Main' 
                component={AppBottomNavigation} 
                options={{
                    title: "Главнвя",
                    // drawerIcon: ({ focused: boolean, color: string, size: number }) => <Ionicons name="star"/>
                    // drawerActiveTintColor: THEME.MAIN_COLOR,
                    drawerLabelStyle: {
                        fontSize: 20
                    }
                }}
            />
            <Drawer.Screen 
                name='Create' 
                component={CreateNavigator}
                options={{
                    title: "Создыть пост"
                }}
            />
            <Drawer.Screen 
                name='About' 
                component={AboutNavigator}
                options={{
                    title: "О нас"
                }}
            />
        </Drawer.Navigator>
    )
}
export default MyDrawer;

const styles = StyleSheet.create({
    wrap: {
        marginTop: 30
    }
})