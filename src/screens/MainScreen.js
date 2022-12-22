import { StyleSheet } from "react-native";
import { DATA } from "../data";
import PostList from "../components/PostList";

const MainScreen = ({navigation}) => {

    const onPostHandler = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
    }

    return (
        <PostList data={DATA} onOpen={onPostHandler}/>
    )
}
export default MainScreen;