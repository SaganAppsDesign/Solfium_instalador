import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput, Alert,TouchableOpacity
} from 'react-native';
import fondo from '../../assets/fondo5.jpg'; 
import {db} from '../../fire';


import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export var viabilidad ="Viabilidad por concretar"
export var potenciaSistema ="Por concretar"
export var consumoMensual ="Por concretar"




export class ConsumoMensual extends React.Component {
 
  state = {

    consumoMensual:0,
    opacity:0.5,
    bool:true

  }
  
    onPress = (key) => {
  
    this.props.navigation.navigate('Usuarios')
    db.ref('/Usuarios/' + key).update({
      consumoMensual: consumoMensual
      
    })}
   

    onChangeText = consumoMensual => { 

      this.setState({ consumoMensual }, () => {

      if (this.state.consumoMensual == "," || this.state.consumoMensual == ".") {
        
        this.setState({ potenciaEstado: "" })
      }

    })}


    onEndEditing () {
      
        if (consumoMensual<250 || consumoMensual >2500 || consumoMensual=="." || consumoMensual=="," ){

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
      const { route } = this.props;
      const { key } = route.params;

      var opacity=0.5
      var bool=true

      consumoMensual=this.state.consumoMensual
      

      if (consumoMensual<250 || consumoMensual >2500|| consumoMensual=="." || consumoMensual==","){

        opacity=0.5
        bool=true

      } else {
        opacity=1
        bool=false


      }

          
      return (
        <ImageOverlay 
  
        source={fondo}
        height={"100%"}
        overlayAlpha={0}
          
  
        >
      
        <View style={{height:hp('100%'), width:wp('100%'), alignItems:'center', flex:1}}>

        <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:hp('5%'), width:wp('100%')}}>
          <Text style={{fontWeight:'bold', fontSize:hp('2%'),  textAlign:'center'}}>Introduce consumo entre 250 y 2,500 KWh</Text> 
        </View> 
        <View style={{justifyContent:'center', alignItems:'center', flex:5}}>
                   <View style={{justifyContent:'center', alignItems:'center', width:wp('100%'), height:hp('13%'), flex:1,marginTop:hp('0%')}}>              
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
                  </View>
                <View style={{height:hp('100%'), width:wp('100%'), alignItems:'center', flex:2}}>
               
                {/*botón*/}
                <View style={{opacity:opacity, borderRadius:10, backgroundColor:'orange', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                      <TouchableOpacity

                      disabled={bool}
                      onPress={() => this.onPress(key)}
                                          
                      >
                                                        
                            <Text style={{
                              marginTop:hp('1.1%'),
                              color: 'black',
                              textAlign:'center',
                              fontWeight:'bold',
                              fontSize:hp('1.9%'),
                              width:wp('100%'),
                              opacity:opacity
                
                            }}>Aceptar</Text>
                          
                      </TouchableOpacity>
                                          
                </View>
                {/*fin botón*/}

                </View>

            </View>
        
        </View>
  
      
        </ImageOverlay>
      )
    }
  }
  
  
  
  
  
  
  