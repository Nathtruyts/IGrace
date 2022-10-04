import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Database from './database';
 
export default function New({ navigation }) {

const [descricao, setDescricao] = useState(''); 
const [pessoa, setPessoa] = useState('');
 
function handleDescriptionChange(descricao){ setDescricao(descricao); } 
function handlePersonChange(pessoa){ setPessoa(pessoa); }
function handleButtonPress(){ 
  console.log({id: new Date().getTime(), descricao, pessoa});
  navigation.navigate("Oracao");
}

async function handleButtonPress(){ 
  const listItem = {id: new Date().getTime(), descricao, pessoa};
  Database.saveItem(listItem)
      .then(response => NavigationPreloadManager.navigation("Oracao", listItem));
}
  
  return (
<View style={styles.container}>
  <Text style={styles.title}>Novo Pedido de Oração</Text>
  <View style={styles.inputContainer}> 
    <TextInput 
      style={styles.input} 
      onChangeText={handleDescriptionChange} 
      placeholder="Qual o pedido?"
      clearButtonMode="always" /> 
    <TextInput 
      style={styles.input} 
      onChangeText={handlePersonChange} 
      placeholder="Para quem é destinada a oração?" 
      clearButtonMode="always" /> 
    <TouchableOpacity style={styles.button} onPress={handleButtonPress}> 
    <Text style={styles.buttonText}>Salvar</Text> 
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
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    }
  });