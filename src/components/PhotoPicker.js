import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

async function askForPermissions() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);

    if (status !== 'granted') {
        Alert.alert("Error. You haven't given rights to use CAMERA");
        return false;
    }

    return true;
}

const PhotoPicker = ({ onPick }) => {
    const [image, setImage] = useState(null);

    const takePhoto = async () => {
        const hasPermissions = await askForPermissions();

        if (!hasPermissions) {
            return;
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [3, 4],
        });

        setImage(img.uri);
        onPick(img.uri);
    };

    return (
        <View style={styles.wrapper}>
            <Button title="Take photo" onPress={takePhoto} />
            {image && <Image style={styles.image} source={{ uri: image }} />}
        </View>
    );
};

export default PhotoPicker;

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 15,
    },
    image: {
        // width: '100%',
        height: 300,
        marginTop: 15,
    },
});
