import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Post from "../components/Post";
import { DATA } from "../data";

const MainScreen = ({navigation}) => {

    const onPostHandler = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
    }

    return (
        <View style={styles.center}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) => <Post post={item} onOpen={onPostHandler}/>}
            />
        </View>
    )
}
export default MainScreen;

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})