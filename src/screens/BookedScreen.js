import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BookedScreen = () => {
    return (
        <View style={styles.center}>
            <Text>Booked Screen</Text>
        </View>
    );
};

export default BookedScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
