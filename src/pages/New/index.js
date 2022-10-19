import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../../config/firebase';

import styles from './styles';
import {Feather} from 'react-native-vector-icons';
 
export default function New({ route, navigation }) {
const Database = firebase.firestore()
const [descricao, setDescricao] = useState(null); 
const [pessoa, setPessoa] = useState(null);
 
useEffect(() => {
  if(!route.params) return;
  setDescricao();
  setPessoa();
}, [route])


function saveItem(){
  Database.collection('devotions').add({
    descricao: descricao,
    pessoa: pessoa,
  })
  navigation.navigate("Orações");
}

  return (
<View style={styles.container}>
  <Text style={styles.title}>Novo Pedido de Oração</Text>
  <View style={styles.inputContainer}> 
    <TextInput 
      style={styles.input} 
      onChangeText={setDescricao} 
      placeholder="Qual o pedido?"
      clearButtonMode="always"
      value={descricao} /> 
    <TextInput 
      style={styles.input} 
      onChangeText={setPessoa} 
      placeholder="Para quem é destinada a oração?" 
      clearButtonMode="always"
      value={pessoa} />

     { descricao ==="" || pessoa ===""
     ?
     <TouchableOpacity 
      disabled={true}
      style={styles.button}>
    <View style={styles.buttonContainer}>
        <Feather name="save" size={22} color="white"/>
      </View> 
    </TouchableOpacity>
    :
    <TouchableOpacity 
      style={styles.button} 
      onPress={()=>{
        setPessoa("")
        setDescricao("")
        saveItem()
      }}>
    <View style={styles.buttonContainer}>
        <Feather name="save" size={22} color="white"/>
      </View> 
    </TouchableOpacity>
    }   
  </View>
</View>
);
  }
