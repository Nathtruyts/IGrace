import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import New from './pages/New';
import Notificacao from './pages/notificacao';
import Oracao from './pages/oracao';
import Progamacao from './pages/Programacao';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Programação" component={Progamacao}/>
            <Tab.Screen name="Novo" component={New}/>
            <Tab.Screen name="Oração" component={Oracao}/>
            <Tab.Screen name="Notificação" component={Notificacao}/>
        </Tab.Navigator>
    )
}