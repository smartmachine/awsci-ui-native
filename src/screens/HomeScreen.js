import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';

export const HomeScreen = () => (
    <Layout style={styles.container}>
        <Text style={styles.text} category='h4'>Welcome to Unikitty</Text>
        <Button>Button</Button>
    </Layout>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 32,
        paddingHorizontal: 24,
    },
    text: {
        marginVertical: 16
    },
});