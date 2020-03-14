import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { addPost } from '../store/actions/post';
import PhotoPicker from '../components/PhotoPicker';

const CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const imgRef = useRef();

    const photoPickHandler = uri => {
        imgRef.current = uri;
    };

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: imgRef.current,
            booked: false,
        };
        dispatch(addPost(post));
        navigation.navigate('Main');
    };

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>New Post</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="New post.."
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler} />
                    <Button title="Create Post" onPress={saveHandler} disabled={!text || !imgRef.current} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'New post',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
    ),
});

export default CreateScreen;

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10,
    },
    textArea: {
        padding: 10,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
});
