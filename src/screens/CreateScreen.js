import { View, Text, StyleSheet } from "react-native";

const CreateScreen = () => {

    return (
        <View style={styles.center}>
            <Text>Create</Text>
        </View>
    )
}
export default CreateScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})