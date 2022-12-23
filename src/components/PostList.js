import { View, FlatList, StyleSheet, Text } from "react-native";
import Post from "./Post";

const PostList = ({data, onOpen}) => {

    if(!data.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.noItems}>Постов пока нет</Text>
            </View>
        )
    }

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
    },
    noItems: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10
    }
})