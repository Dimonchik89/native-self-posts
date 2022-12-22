import { StyleSheet } from "react-native";
import { DATA } from "../data";
import PostList from "../components/PostList";

const BookedScreen = ({navigation}) => {

    const onPostHandler = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
    }

    const data = DATA.filter(item => item.booked);

    return (
        <PostList data={data} onOpen={onPostHandler}/>
    )
}
export default BookedScreen;