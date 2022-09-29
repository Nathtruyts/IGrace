import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";


export default function Login () {
  const navigation = useNavigation();
  const clearOnbording = async () => {
    try{
        await AsyncStorage.removeItem('@viewedOnbording');
    } catch (err) {
        console.log('Error @clearOnbording: ', err)
    }
}
    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
             <Image
              source={require('../assets/Logo.png')}
              />
            </View>

           <View style={styles.container}>
            <TextInput
            style={styles.Input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={()=> {}}
            />
            <TextInput
            style={styles.Input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={()=> {}}
            />

            <TouchableOpacity 
             style={styles.btnSubmit}>
             <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCreate}>
            <Text style={styles.createText}>Criar conta gratuita</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={clearOnbording}>
                <Text>Clear Onbording</Text>
            </TouchableOpacity>
           
           </View>
        
        </KeyboardAvoidingView>
    );

};

const styles = StyleSheet.create({
    background: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#DCDCDC'
   },
    containerLogo:{
     flex: 1,
     justifyContent: 'center',
     marginTop: 100,   
   },
    container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     width: '90%',
   },
    Input: {
     backgroundColor: '#FFF',
     width: 300,
     marginBottom:15,
     color: '#222',
     fontSize: 17,
     borderRadius: 7,
     padding: 10, 
     textAlign: 'center',
   },
    btnSubmit:{
     backgroundColor: '#35AAFF',
     width: 150,
     height: 45,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 7
    },
    submitText:{
      color: '#FFF',
      fontSize: 18
    },
    btnCreate: {
      marginTop: 15,
    }, 
    createText:{
      color: 'black',
      fontsize: 10
    }
})