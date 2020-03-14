import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { THEME } from '../theme';

import AppHeaderIcon from '../components/AppHeaderIcon';
import { toggleBooked, removePost } from '../store/actions/post';

const PostScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const postId = navigation.getParam('postId');

    const post = useSelector(state => state.post.allPosts.find(p => p.id === postId));

    const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId));

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(postId));
    }, [dispatch, postId]);

    useEffect(() => {
        navigation.setParams({ toggleHandler });
    }, [toggleHandler]);

    useEffect(() => {
        navigation.setParams({ booked });
    }, [booked]);

    const removeHandler = () => {
        Alert.alert(
            'Delete post',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(removePost(postId));
                        navigation.navigate('Main');
                    },
                },
            ],
            { cancelable: false },
        );
    };

    if (!post) {
        return null;
    }

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
    const booked = navigation.getParam('booked');
    const toggleHandler = navigation.getParam('toggleHandler');

    const iconName = booked ? 'ios-star' : 'ios-star-outline';

    return {
        headerTitle: `Post ${new Date(date).toLocaleDateString()}`,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="bookmark" iconName={iconName} onPress={toggleHandler} />
            </HeaderButtons>
        ),
    };
};

export default PostScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
    },
    textWrapper: {
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
