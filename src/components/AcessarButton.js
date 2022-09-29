import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import {Entypo} from "@expo/vector-icons";

export default function AcessarBtn ({size, color}){
    return(
        <View>
            <Entypo name="arrow-bold-right" color={color} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:220,
        height:220,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
    }
});