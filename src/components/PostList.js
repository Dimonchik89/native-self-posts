import { View, FlatList, StyleSheet } from "react-native";
import Post from "./Post";

const PostList = ({data, onOpen}) => {

    return (
        <View style={styles.center}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) => <Post post={item} onOpen={onOpen}/>}
            />
        </View>
    )
}
export default PostList;

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})