import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,TextInput, Alert
} from 'react-native';
import fondo from '../../assets/fondo5.jpg'; 


import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export var viabilidad ="Viabilidad por concretar"
export var potenciaSistema ="Por concretar"
export var consumoMensual ="Por concretar"





export class ConsumoMensual extends React.Component {
 
  state = {

    viabilidad: '',
    potenciaSistema:'',
    consumoMensual:''

  }
  
    onPress = () =>
  
    this.props.navigation.navigate('Usuarios');
   

    onChangeText = consumoMensual => { 

      this.setState({ consumoMensual }, () => {

      if (this.state.consumoMensual == "," || this.state.consumoMensual == ".") {
        
        alert("Por favor, introduce número")
        this.setState({ potenciaEstado: "" })
      }

    })}


    showalert() {
          Alert.alert(
            "Atención",
            "Por favor, introduce consumo entre 250 y 2,500 KWh",
            [
              { text: "Prueba de nuevo", onPress: () => console.log("hola")}
            ],
            { cancelable: false }
          )}

    onEndEditing () {
      
        if (consumoMensual<250 || consumoMensual >2500){

          Alert.alert(
            "Atención",
            "Por favor, introduce consumo entre 250 y 2,500 KWh",
            [
              { text: "Prueba de nuevo", onPress: () => console.log("hola")}
            ],
            { cancelable: false }
          )}
       
      }
 
  
    render() {

        potenciaSistema= this.state.potenciaSistema
        consumoMensual=this.state.consumoMensual
          
      return (
        <ImageOverlay 
  
        source={fondo}
        height={"100%"}
        overlayAlpha={0}
          
  
        >
      
        <View style={{height:hp('100%'), width:wp('100%'), alignItems:'center', flex:1}}>

        <View style={{flex:0.1, alignItems:'center', justifyContent:'center', marginTop:hp('5%')}}>
          <Text style={{fontWeight:'bold', fontSize:hp('2%'),  textAlign:'center'}}>Introduce consumo entre 250 y 2,500 KWh</Text> 
        </View> 
        <View style={{justifyContent:'center', alignItems:'center', width:wp('100%'), height:hp('13%'), flex:0.2,marginTop:hp('0%')}}>
                            
                            <TextInput
                                style={{
                                  height: hp('7%'),
                                  marginBottom:hp('2%'),
                                  width:wp('80%'),
                                  backgroundColor: '#5B5A58',
                                  fontSize: hp('2.5%'),
                                  fontWeight: 'bold',
                                  borderRadius: 30,
                                  textAlign:'center',
                                  color:'#74ECE5'
                                                             
                                }}
                                placeholder="Consumo Mensual(KWh)"
                                placeholderTextColor = "white"
                                keyboardType='numeric'
                                onChangeText={this.onChangeText}
                                onEndEditing={this.onEndEditing}
                                value={this.state.consumoMensual}
                                returnKeyType={ 'done' }
                                maxLength={4} 
                            
                                
                            />


                <View style={{borderRadius:10, alignItems:'center', textAlign:'center',  marginTop:hp('2%'), width:wp('50%'), height:hp('0.3%'),backgroundColor:'orange', flex:0.8, fontSize:hp('0.6%'), borderColor:'white', borderWidth:2}}>
                         
                         <Button  title='Volver atrás' color='black' onPress={() => this.props.navigation.navigate('Usuarios')}></Button>
                </View>

            </View>
      
      
               

  
        
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
  
  
  