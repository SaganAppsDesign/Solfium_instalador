import * as React from 'react';
import {Component, Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './src/Componentes/homeScreen';  
import { Chat } from './src/Componentes/chat'; 
import { PantallaInicial } from './src/Componentes/pantalla_inicial'; 
import { Usuarios } from './src/Componentes/usuarios'; 
import { Calendario } from './src/Componentes/calendario'; 
import { Viabilidad } from './src/Componentes/viabilidad'; 
import 'react-native-gesture-handler';


const Stack = createStackNavigator();
console.disableYellowBox = true;


class MyStack extends Component {
 
 
  render(){ 

  return (
    <Stack.Navigator

      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>

      <Stack.Screen options={{headerShown: false}} name="Home" component={PantallaInicial}  />
      <Stack.Screen options={{headerShown: false}}  name="Usuarios" component={Usuarios}  />
      <Stack.Screen name="Chat" component={Chat}  />
      <Stack.Screen name="Calendario" component={Calendario}  />
      <Stack.Screen options={{headerShown: false}}  name="Viabilidad" component={Viabilidad}  />


    </Stack.Navigator>
  )};
}


export default function App()  {
  return (

   <Fragment>
 
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>

    
    </Fragment>

   
  );
}


