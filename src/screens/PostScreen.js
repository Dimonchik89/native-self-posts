import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView, Alert } from "react-native";
import { DATA } from '../data';
import { THEME } from '../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from "../components/AppHeaderIcon";

const PostScreen = ({navigation, route}) => {
    const { postId, booked } = route.params;
    
    const post = DATA.find(item => item.id === postId)
    const iconName = post.booked ? 'ios-star' : 'ios-star-outline';

      React.useLayoutEffect(() => {
        navigation.setOptions({
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="search" iconName={iconName} onPress={() => alert('search')} />
            </HeaderButtons>
        ),
        });
    }, [navigation]);

    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы точно хотите удалить пост?",
            [
                {
                text: "Cancel",
                style: "cancel"
                },
                { text: "OK", style: "destructive", onPress: () => {} }
            ],
            {cancelable: false}
        );
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