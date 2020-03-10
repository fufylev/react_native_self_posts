import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
    return (
        <View style={styles.center}>
            <Text>About Screen</Text>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
