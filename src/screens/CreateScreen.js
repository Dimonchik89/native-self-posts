import { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { PhotoPicker } from "../components/PhotoPicker";
import { addPost } from "../store/actions/post";
import { THEME } from "../theme";

const CreateScreen = ({navigation}) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const imgRef = useRef();

    // const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text,
            img: imgRef.current,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate("Main")
        // setText("")
    }

    const photoPickHandler = (uri) => {
        imgRef.current = uri
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.warpper}>
                    <Text style={styles.title}>Создать пост</Text>
                    <TextInput
                        style={styles.textarea}
                        placeholder="Введите текст поста"
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler}/>
                    <Button
                        title='Создать пост'
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                        disabled={!text}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}
export default CreateScreen;

const styles = StyleSheet.create({
    warpper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom:10
    }
})