import { StyleSheet } from "react-native";
import { DATA } from "../data";
import PostList from "../components/PostList";
import { useSelector } from "react-redux";

const BookedScreen = ({navigation}) => {
    const bookedPosts = useSelector(state => state.post.bookedPosts)

    const onPostHandler = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
    }

    return (
        <PostList data={bookedPosts} onOpen={onPostHandler}/>
    )
}
export default BookedScreen;