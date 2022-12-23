import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView, Alert } from "react-native";
import { DATA } from '../data';
import { THEME } from '../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { useDispatch, useSelector } from "react-redux";
import { removePost, toggleBooked } from "../store/actions/post";
import { useTheme } from "react-native-paper";

const PostScreen = ({navigation, route}) => {
    const { postId } = route.params;
    const [ iconName, setIconName ] = useState('ios-star-outline')
    const dispatch = useDispatch()
    const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))
    const post = useSelector(state => state.post.allPosts.find(item => item.id === postId))
    
    // const post = DATA.find(item => item.id === postId)
    // const iconName = booked ? 'ios-star' : 'ios-star-outline';

    useEffect(() => {
        if(booked) {
            setIconName('ios-star')
        } else {
            setIconName('ios-star-outline')
        }
    }, [booked])

      React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="search" iconName={iconName} onPress={() => dispatch(toggleBooked(post))} />
                </HeaderButtons>
            ),
        });
    }, [navigation, iconName]);

    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы точно хотите удалить пост?",
            [
                {
                text: "Cancel",
                style: "cancel"
                },
                { text: "OK", style: "destructive", onPress: () => {
                    navigation.navigate("Main")
                    dispatch(removePost(postId))
                } }
            ],
            {cancelable: false}
        );
    }

    if(!post) {
        return null
    }

    return (
        <ScrollView>
            <Image 
                style={styles.image}
                source={{ uri: post.img }}
            />
            <View style={styles.textWrap}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </View>
            <Button 
                title="Удалить" 
                color={THEME.DANGER_COLOR}
                onPress={removeHandler}
            />
        </ScrollView>
    )
}
export default PostScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontSize: 20
    }
})