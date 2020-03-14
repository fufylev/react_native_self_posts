import React, { useState } from 'react';
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

const CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const img =
        'https://images.unsplash.com/photo-1583272630857-5a0fd42e611e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=800';

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: img,
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
                    <Image
                        style={styles.image}
                        source={{
                            uri: img,
                        }}
                    />
                    <Button title="Create Post" onPress={saveHandler} />
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
