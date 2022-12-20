import { View, Text, StyleSheet } from "react-native";

const SboutScreen = () => {

    return (
        <View style={styles.center}>
            <Text>About</Text>
        </View>
    )
}
export default SboutScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})