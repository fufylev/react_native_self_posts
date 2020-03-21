import React, { useRef, useState, useEffect } from 'react';
import {
    Alert,
    Button,
    Keyboard,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { addPost } from '../store/actions/post';
import PhotoPicker from '../components/PhotoPicker';

const CreateScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    let imgRef = useRef();

    useEffect(() => {
        if (!text) {
            imgRef.current = ''
        }
    }, []);

    const photoPickHandler = uri => {
        imgRef.current = uri;
    };

    const saveHandler = () => {
        if (text && imgRef.current) {
            const post = {
                date: new Date().toJSON(),
                text: text,
                img: imgRef.current,
                booked: false,
            };
            dispatch(addPost(post));
            navigation.navigate('Main');
        } else if (!imgRef.current) {
            Alert.alert('Oppps! You forgot to take a picture 🙂')
            return
        } else if (!text) {
            Alert.alert(
                `You didn't add a title to your photo 🙂`,
                'Are you sure to safe the post as it is?️',
                [
                    {
                        text: 'No',
                        onPress: () => {
                            return
                        },
                        style: 'destructive',
                    },
                    {
                        text: 'Yes', onPress: () => {
                            const post = {
                                date: new Date().toJSON(),
                                text: text,
                                img: imgRef.current,
                                booked: false,
                            };
                            dispatch(addPost(post));
                            navigation.navigate('Main');
                        }
                    },
                ],
                {cancelable: false}
            );
        }


    };

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>New Post</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Describe your photo..."
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler}/>
                    <Button title="Create Post" onPress={saveHandler}/>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'New post',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
        </HeaderButtons>
    ),
});

export default CreateScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'space-between'
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
        fontSize: 16
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
});
