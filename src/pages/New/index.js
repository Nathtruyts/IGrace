import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Database from './database';

import {Feather} from 'react-native-vector-icons';
 
export default function New({ route, navigation }) {

const id = route.params ? route.params.id : undefined;
const [descricao, setDescricao] = useState(''); 
const [pessoa, setPessoa] = useState('');
 
useEffect(() => {
  if(!route.params) return;
  setDescricao(route.params.descricao);
  setPessoa(route.params.pessoa);
}, [route])

function handleDescriptionChange(descricao){ setDescricao(descricao); } 

function handlePersonChange(pessoa){ setPessoa(pessoa); }

async function handleButtonPress(){ 
  const listItem = {descricao, pessoa};
  Database.saveItem(listItem, id)
    .then(response => navigation.navigate("Oração", listItem));
}

  return (
<View style={styles.container}>
  <Text style={styles.title}>Novo Pedido de Oração</Text>
  <View style={styles.inputContainer}> 
    <TextInput 
      style={styles.input} 
      onChangeText={handleDescriptionChange} 
      placeholder="Qual o pedido?"
      clearButtonMode="always"
      value={descricao} /> 
    <TextInput 
      style={styles.input} 
      onChangeText={handlePersonChange} 
      placeholder="Para quem é destinada a oração?" 
      clearButtonMode="always"
      value={pessoa} />
    <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
      <View style={styles.buttonContainer}>
        <Feather name="save" size={22} color="white"/>
      </View> 
    </TouchableOpacity>
  </View>
</View>
);
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
    },
    inputContainer: {
      flex: 1,
      marginTop: 30,
      width: '90%',
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
    input: {
      marginTop: 10,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'stretch'
    },
    button: {
      marginTop: 10,
      height: 60,
      backgroundColor: 'blue',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      shadowOpacity: 20,
      shadowColor: '#ccc',
    }
  });