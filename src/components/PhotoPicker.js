import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
import { View, StyleSheet, Image, Button } from 'react-native';

// async function askForPermissions() {
//     Permissions.askAsync({
//         Permissions.CAMERA,
//         Permissions.CAMERA_ROLL
//     })
// }

export const PhotoPicker = ({ onPick }) => {
    const [image, setImage] = useState(null)

    const takePhoto = async () => {
        const img = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9],
        })
        setImage(img.assets[0].uri)
        onPick(img.assets[0].uri)
    }

    return (
        <View style={styles.wrapper}>
            <Button 
                title="Сделать фото"
                onPress={takePhoto}
            />
            {image && <Image style={styles.image} source={{ uri: image }}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
})