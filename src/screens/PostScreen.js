import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native';
import { THEME } from '../theme';
import { DATA } from '../data';

const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId');

    const post = DATA.find(p => p.id === postId);

    const removeHandler = () => {
        Alert.alert(
            'Delete post',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'Delete', style: 'destructive', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );
    };

    return (
        <ScrollView style={styles.center}>
            <Image style={styles.img} source={{ uri: post.img }} />
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button title="delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    );
};

PostScreen.navigationOptions = ({ navigation }) => {
    const date = navigation.getParam('date');

    return {
        headerTitle: `Post ${new Date(date).toLocaleDateString()}`,
    };
};

export default PostScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
    },
    textWrapper: {
        // flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-bold',
        fontSize: 20,
    },
    img: {
        width: '100%',
        height: 200,
    },
});
