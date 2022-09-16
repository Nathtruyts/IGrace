import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import New from './pages/New';
import Perfil from './pages/Perfil1';
import Oracao from './pages/oracao';
import Progamacao from './pages/Programacao';

import {Entypo, FontAwesome5} from 'react-native-vector-icons';

import ButtonNew from './components/ButtomNew';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
          screenOptions={{
            tabBarStyle:{
                backgorundColor: '#121212',
                borderTopColor:'transparent'
            },
            activeTintColor:'#FFF',
            tabBarStyle:{
                paddingBottom:5,
                paddingTop:5,
            }
          }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({size, color}) => (
                <Entypo name="home" size ={size} color={color}/>
                )
            }}
            />
            
            <Tab.Screen 
            name="Programação" 
            component={Progamacao}
            options={{
                tabBarIcon: ({size, color}) => (
                <Entypo name="calendar" size ={size} color={color}/>
                )
            }}
            />
            
            <Tab.Screen 
            name="Novo" 
            component={New}
            options={{
                tabBarLabel:"",
                tabBarIcon: ({size, color}) => (
                <ButtonNew size ={size} color={color}/>
                )
            }}
            />
            
            <Tab.Screen 
            name="Oração" 
            component={Oracao}
            options={{
                tabBarIcon: ({size, color}) => (
                <FontAwesome5 name="pray" size ={size} color={color}/>
                )
            }}
            />
            
            <Tab.Screen 
            name="Perfil" 
            component={Perfil}
            options={{
                tabBarIcon: ({size, color}) => (
                <Entypo name="user" size ={size} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}