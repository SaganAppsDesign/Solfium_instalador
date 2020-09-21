import React from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import Fire, {db} from '../../fire';
import fondo from '../../assets/fondo.jpg'; 

import { TextInput } from 'react-native-paper';
import ImageOverlay from "react-native-image-overlay";

export var viabilidad ="Viabilidad por concretar"


export class Viabilidad extends React.Component {
 
  state = {

    viabilidad: '',

  }

  onPress = () =>
  
    this.props.navigation.navigate('Usuarios');

  onChangeText = viabilidad => this.setState({ viabilidad });

  
  viabilidad = () =>  db.ref('/Instaladores/' +  Fire.getUid()).update({
    viabilidad: this.state.viabilidad
   
    //fecha: fecha,
  
    })

   

 

    render() {

        viabilidad = this.state.viabilidad

     
      return (
        <ImageOverlay 
  
        source={fondo}
        height={"100%"}
        overlayAlpha={0}
          
  
        //resizeMode="stretch"
        //style={styles.fondo} 
        >
      
        <View style={{height:'100%', width:'100%', alignItems:'center', flex:1}}>
  
        <KeyboardAvoidingView  enabled keyboardVerticalOffset={50}
        style={{height:'100%', width:'100%', flex:5}}>
      
         <ScrollView style={{marginTop:'0%', height:'100%', width:'100%'}}> 
         
                <View style={{marginTop:'30%', height:'100%', width:'100%', flex:1}}>
                  <TextInput
                    style={styles.nameInput}
                    label="Viabilidad"
                    onChangeText={this.onChangeText}
                    value={this.state.viabilidad}
                    //mode='outlined'
                    theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                      
                    
                  />
  
                  <TouchableOpacity onPress={
                    () => { this.onPress()}
                  }
                  >
                  <Text style={styles.buttonText}>Confirma viabilidad</Text>
                  </TouchableOpacity>
  
                </View>
            
  
           </ScrollView>
          </KeyboardAvoidingView>
        </View>
  
      
        </ImageOverlay>
      );
    }
  }
  
  
  
  
  const styles = StyleSheet.create({
   
    nameInput: {
      height: 70,
      marginLeft: '10%',
      marginTop:'5%',
      marginBottom:'5%',
      width:'80%',
      paddingHorizontal: '25%',
      backgroundColor: 'white',
      fontSize:20,
      fontWeight: 'bold',
      borderRadius: 2,
     
     
    },
    buttonText: {
      marginLeft: '10%',
      marginTop:'0%',
      fontSize: 20,
      marginBottom:'5%',
      fontWeight:'bold',
      backgroundColor: '#DD650C',
      width:'40%',
      height:'100%',
      borderRadius: 10,
      textAlign:'center',
      flex:1
    },
  });
  
  
  