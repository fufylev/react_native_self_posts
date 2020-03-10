import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DATA } from '../data';
import Post from '../components/Post';
import AppHeaderIcon from '../components/AppHeaderIcon';

const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date,
        });
    };

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
            />
        </View>
    );
};

MainScreen.navigationOptions = {
    headerTitle: 'Dashboard',
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='take photo' iconName='ios-camera' onOpen={() => null}/>
        </HeaderButtons>
    ),
};

export default MainScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 5,
    },
});
