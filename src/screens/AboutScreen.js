import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';

const AboutScreen = () => {
    return (
        <View style={styles.center}>
            <Text style={styles.text}>The best app I've ever created</Text>
            <Text style={styles.text}>
                Version <Text style={styles.ver}>1.0.0</Text>
            </Text>
        </View>
    );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'About',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
    ),
});

export default AboutScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
    ver: {
        fontFamily: 'open-bold',
    },
});