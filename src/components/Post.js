import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDateFormatted(givenDate) {
    const date = new Date(givenDate);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

const Post = ({ post, onOpen }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
            <View style={styles.post}>
                <ImageBackground style={styles.image} source={{ uri: post.img }}>
                    <View style={styles.textWrap}>
                        <Text style={styles.title}>{getDateFormatted(post.date)}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

export default Post;

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 300,
    },
    textWrap: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        color: '#fff',
        fontFamily: 'open-regular',
    },
});
