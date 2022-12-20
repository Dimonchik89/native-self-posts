import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { THEME } from '../theme';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen a
                name="Main" 
                component={MainScreen} 
                options={{ 
                    title: 'My home',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title='Take photo' iconName='camera' onPress={() => console.log('press photo')}/>
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title='Toggle Drawer' iconName='ios-menu' onPress={() => console.log('press photo')}/>
                        </HeaderButtons>
                    ),
                    headerStyle: {
                            backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
                        },
                        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                }}
            />
            <Stack.Screen 
                name="Post" 
                component={PostScreen} 
                options={({route}) => ({ 
                    title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
                    headerStyle: {
                            backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
                        },
                        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                })}
            />
        </Stack.Navigator>
    )
}
export default HomeNavigator;