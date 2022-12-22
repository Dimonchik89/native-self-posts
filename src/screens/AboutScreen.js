import { View, Text, StyleSheet } from "react-native";

const AboutScreen = () => {

    return (
        <View style={styles.center}>
            <Text>Приложение для личных заметок</Text>
            <Text>Версия <Text style={styles.version}>1.0.0</Text></Text>
        </View>
    )
}
export default AboutScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    version: {
        fontWeight: "700"
    }
})