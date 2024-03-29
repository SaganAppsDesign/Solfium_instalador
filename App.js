import * as React from 'react';
import {Component, Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Chat } from './src/Componentes/chat'; 
import { PantallaInicial } from './src/Componentes/pantalla_inicial'; 
import { Usuarios } from './src/Componentes/usuarios'; 
import { Cita } from './src/Componentes/cita'; 
import { FechaInstalacion } from './src/Componentes/fechaInstalacion'; 
import { Viabilidad } from './src/Componentes/viabilidad'; 
import {SplashScreen } from './src/Componentes/splash_screen'; 
import {ConsumoMensual } from './src/Componentes/consumo_mensual';
import {VideoInfo } from './src/Componentes/video_informativo';  

import 'react-native-gesture-handler';
import {
  Button
} from 'react-native';
import Fire, {db} from './fire';



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

      <Stack.Screen  options={{headerShown: false}} name="Atrás" component={SplashScreen}/>
      <Stack.Screen  name="Home" component={PantallaInicial}  />
      <Stack.Screen name="Usuarios" component={Usuarios}/>
       <Stack.Screen name="Chat" component={Chat}    
       
       
     
       options={({ navigation }) => ({headerLeft: () => (
        <Button
          onPress={() => {navigation.navigate('Usuarios');    db.ref('Usuarios/' +  global.idCliente).update({
        
            envioMensaje:  "false"
                  
            })         }}
          title="Clientes"
          color="#fff"
        />
      )})}
                    
          />

      <Stack.Screen name="Cita" component={Cita}  />
      <Stack.Screen name="Fecha Instalacion" component={FechaInstalacion}  />
      <Stack.Screen  name="Potencia Kw" component={Viabilidad}  />
      <Stack.Screen  name="Video informativo" component={VideoInfo}  />
      <Stack.Screen options={{headerShown: false}} name="Consumo mensual" component={ConsumoMensual}  />

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


