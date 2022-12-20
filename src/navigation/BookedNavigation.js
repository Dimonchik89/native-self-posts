import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { THEME } from '../theme';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import BookedScreen from "../screens/BookedScreen";
import PostScreen from "../screens/PostScreen";

const Stack = createNativeStackNavigator()

const BookedNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Bookeds"
                component={BookedScreen}
                options={{
                    title: "Booked",
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
export default BookedNavigation;