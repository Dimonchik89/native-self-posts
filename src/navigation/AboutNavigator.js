import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../screens/AboutScreen";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from '../components/AppHeaderIcon';


const Stack = createNativeStackNavigator()

export const menuOptions = (navigation, title) => ({
                title,
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                        <Item title='Toggle Drawer' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
                    </HeaderButtons>
                ),
                headerStyle: {
                        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
                    },
                        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                    },
                })

const AboutNavigator = ({navigation}) => {
    console.log('navigation drawer', navigation);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About screen"
                component={AboutScreen}
                options={() => menuOptions(navigation, "About")}
            />
        </Stack.Navigator>
    )
}
export default AboutNavigator;