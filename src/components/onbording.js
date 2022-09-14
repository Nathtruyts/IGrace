import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';

export default Onbording = () => {
    return(
        <View style={styles.container}>
            <FlatList/>
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