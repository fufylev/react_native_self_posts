import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DATA } from '../data';
import Create from '../screens/CreateScreen';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';

const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date,
            booked: post.booked,
        });
    };

    return <PostList data={DATA} onOpen={openPostHandler} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Dashboard',
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="take photo" iconName="ios-camera" onPress={() => navigation.push('Create')} />
        </HeaderButtons>
    ),
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
    ),
});

export default MainScreen;
