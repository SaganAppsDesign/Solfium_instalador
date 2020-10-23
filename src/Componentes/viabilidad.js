import React from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  View,
  Button
} from 'react-native';
import Fire, {db} from '../../fire';
import fondo from '../../assets/fondo.jpg'; 

import { TextInput } from 'react-native-paper';
import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export var viabilidad ="Viabilidad por concretar"
export var potenciaSistema ="Por concretar"


export class Viabilidad extends React.Component {
 
  state = {

    viabilidad: '',
    potenciaSistema:''

  }
  
  onPress = () =>
  
    this.props.navigation.navigate('Usuarios');

  onChangeText = viabilidad => this.setState({ viabilidad });


 
  
  funcionPotencia(potenciaSistema) {
    this.setState({ potenciaSistema })
    console.log(this.state.potenciaSistema)
    
    
  }



  
  viabilidad = () =>  db.ref('/Instaladores/' +  Fire.getUid()).update({
    viabilidad: this.state.viabilidad
   
    //fecha: fecha,
  
    })

   

  

    render() {

        viabilidad = this.state.viabilidad
        potenciaSistema= this.state.potenciaSistema
        

       

     
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
         
                {/* <View style={{marginTop:'30%', height:'100%', width:'100%', flex:1}}>
                  <TextInput
                    style={styles.nameInput}
                    label="Viabilidad (0-100)"
                    onChangeText={this.onChangeText}
                    value={this.state.viabilidad}
                    returnKeyType={ 'done' }
                    theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                      
                    
                  />
  
                  <TouchableOpacity onPress={
                    () => {this.onPress()}
                  }
                  >
                  <Text style={styles.buttonText}>Confirma viabilidad</Text>
                  </TouchableOpacity>
             
  
                </View> */}

                <View style={{backgroundColor:'#EEEBEB', flex:1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                         <Button  title='3Kw' color='black' onPress={() => this.funcionPotencia(3)}></Button>
                </View>

                <View style={{backgroundColor:'#EEEBEB', flex:1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                         <Button  title='5Kw' color='black' onPress={() => this.funcionPotencia(5)}></Button>
                </View>

                <View style={{backgroundColor:'#EEEBEB', flex:1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                         <Button  title='7Kw' color='black' onPress={() => this.funcionPotencia(7)}></Button>
                </View>

                <View style={{backgroundColor:'#EEEBEB', flex:1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                         <Button  title='10Kw' color='black' onPress={() => this.funcionPotencia(10)}></Button>
                </View>

                <View style={{backgroundColor:'green', flex:1, fontSize:hp('0.5%'), borderColor:'green', borderWidth:1}}>
                         
                         <Button  title='Confirma Potencia Sistema' color='white' onPress={() => this.props.navigation.navigate('Calendario')}></Button>
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
  
  
  