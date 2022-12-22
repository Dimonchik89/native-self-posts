import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateScreen from "../screens/CreateScreen";
import { menuOptions } from "./AboutNavigator";

const Stack = createNativeStackNavigator()

const CreateNavigator = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About screen"
                component={CreateScreen}
                options={() => menuOptions(navigation, "Create")}
            />
        </Stack.Navigator>
    )
}
export default CreateNavigator;