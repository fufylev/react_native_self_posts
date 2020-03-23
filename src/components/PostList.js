import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Post from '../components/Post';

export const PostList = ({ data = [], onOpen, page }) => {
    // console.log(data);
    if (!data.length) {
        return (
            <View style={styles.noPostsWrapper}>
                {page ==='Booked' && <Text style={styles.noItems}>No bookmarked posts️️</Text>}
                {!page && <Text style={styles.noItems}>Press 📸 to make post ⬆️️</Text>}
            </View>
        );
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 5,
    },
    noPostsWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noItems: {
        fontFamily: 'open-bold',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 26,
    },
});
