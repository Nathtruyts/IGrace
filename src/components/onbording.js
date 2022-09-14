import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default Onbording = () => {
    return(
        <View style={styles.container}>
            <Text>Onbording</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 3,

        justifyContent:'center',
        alignItems:'center',

    },
});