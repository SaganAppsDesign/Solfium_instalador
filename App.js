import * as React from 'react';
import {Component, Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './src/Componentes/homeScreen';  
import { Chat } from './src/Componentes/chat'; 
import { Main } from './src/Componentes/main'; 
import { Calendario } from './src/Componentes/calendario'; 
import { InfoResultInsta } from './src/Componentes/info_result_instalacion'; 
import 'react-native-gesture-handler';

const Stack = createStackNavigator();


class MyStack extends Component {
 
 
  render(){ 

  return (
    <Stack.Navigator

        screenOptions={{
        headerStyle: {
          backgroundColor: '#2196F3',
        },
        headerTintColor: '#fff',
        
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>

      <Stack.Screen name="Solfium Instalador" component={HomeScreen}/>
      <Stack.Screen name="Chat" component={Chat}  />
      <Stack.Screen name="Nombre usuario" component={Main}  />
      <Stack.Screen name="Viabilidad" component={InfoResultInsta}  />
      <Stack.Screen name="Calendario" component={Calendario}  />

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


