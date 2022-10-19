import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons} from "react-native-vector-icons"
import styles from './styles';

export default function Login () {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [errorlogin, setErrorLogin] = useState('')
  const navigation = useNavigation();
  
  const LoginFiebase = ()=>{

  }

  useEffect(()=>{

  }, [email]);

    return(
        <KeyboardAvoidingView style={styles.background}>
           
          <View style={styles.container}>
            <TextInput
            style={styles.Input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={(text)=> setEmail(text)}
            value={email}
            />
            <TextInput
            style={styles.Input}
            secureTextEntry={true}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={(text)=> setSenha(text)}
            value={senha}
            />

            {errorlogin === true 
            ?
            <View style={styles.contentAlert}>
              <MaterialCommunityIcons
              name="alert-circle"
              size={24}
              color="#bdbdbd"
              />
              <Text style={styles.warningAlert}> Email ou senha inválidos! </Text> 
            </View>
            :
            <View/>  
            }
             { email ==="" || senha === ""
             ?
             <TouchableOpacity
             disabled={true}
             style={styles.btnSubmit}
             onPress={()=>
               navigation.navigate("Main")
            }>
             <Text style={styles.submitText}>Acessar</Text>
          
            </TouchableOpacity>
             :
            <TouchableOpacity 
            style={styles.btnSubmit}
             onPress={()=>
               navigation.navigate("Main")
            }>
             <Text style={styles.submitText}>Acessar</Text>
          
            </TouchableOpacity>
             }

            <TouchableOpacity style={styles.btnCreate}>
            <Text style={styles.createText}>Criar conta gratuita</Text>
            </TouchableOpacity>
                       
           </View>
        
        </KeyboardAvoidingView>
    );


};

