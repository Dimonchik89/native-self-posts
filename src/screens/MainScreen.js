import { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from '../store/actions/post';
import { THEME } from '../theme';

const MainScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)
    const loading = useSelector(state=> state.post.loading)

    const onPostHandler = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
    }

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    if(loading) {
        <View style={styles.center}>
            <ActivityIndicator color={THEME.MAIN_COLOR}/>
        </View>
    }

    return (
        <PostList data={allPosts} onOpen={onPostHandler}/>
    )
}
export default MainScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})