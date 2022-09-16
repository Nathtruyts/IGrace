import React from 'react';

import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default OnbordingItem = ({ item }) => 
{
    const { width } = useWindowDimensions();

    return(
        <View style={[styles.container, { width}]}>
            
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain'}]}/>

            <View style={{ flex: 0.3}}>

                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.description}>{item.description}</Text>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image:{
        flex: 0.5,
        justifyContent: 'center',
        paddingVertical: 15,
    },

    title: {
        fontWeight: '400',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 0.8,
        fontSize: 28,
        fontWidth: 'bold',
    },

    description: {
        fontWeight: '500',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 34,
        paddingVertical: 25,
        fontSize: 18,
    },
})