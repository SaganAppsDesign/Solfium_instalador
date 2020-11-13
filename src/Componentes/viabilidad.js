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
import fondo from '../../assets/fondo5.jpg'; 

import { TextInput } from 'react-native-paper';
import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export var viabilidad ="Viabilidad por concretar"
export var potenciaSistema ="Por concretar"

var opacity = 1
var opacity2 = 1
var opacity3 = 1
var opacity4 = 1
var opacity5 = 1

export class Viabilidad extends React.Component {
 
  state = {

    viabilidad: '',
    potenciaSistema:'',
    opacity:1

  }

  
  
  onPress = () =>
  
    this.props.navigation.navigate('Usuarios');

  onChangeText = viabilidad => this.setState({ viabilidad });


 
  
  funcionPotencia(potenciaSistema) {
    
    this.setState({ potenciaSistema })

    alert("Has elegido " + potenciaSistema + "Kw de potencia. Envía este dato al servidor, en la pantalla de 'Usuarios'")
    
    if(potenciaSistema==3){
      
      this.setState({ opacity :0.5 })
      
    } else if (potenciaSistema==5) {
      this.setState({ opacity2 :0.5 })
    } else if (potenciaSistema==7) {
      this.setState({ opacity3 :0.5 })
    } else if(potenciaSistema==10){
      this.setState({ opacity4 :0.5 })
        
  }
}

  funcionPotencia2(potenciaSistema) {
    this.setState({ potenciaSistema })

    alert("Has elegido " + potenciaSistema + " Envía este dato al servidor, en la pantalla de 'Usuarios'")
    this.setState({ opacity5 :0.5 })
    
  }



    render() {

      

        viabilidad = this.state.viabilidad
        potenciaSistema= this.state.potenciaSistema
        
    

     
      return (
        <ImageOverlay 
  
        source={fondo}
        height={"100%"}
        overlayAlpha={0}
          
  
        >
      
        <View style={{height:hp('100%'), width:wp('100%'), alignItems:'center', flex:1}}>
  
                 {/*botón*/}
                 <View style={{opacity:this.state.opacity,  marginTop:hp('8%'),  borderRadius:30,  backgroundColor:'#6BCA9B', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                        <TouchableOpacity
                  
                        onPress={() => this.funcionPotencia(3)}
                                            
                        >
                                                          
                              <Text style={{
                                marginTop:hp('1.1%'),
                                color: 'black',
                                textAlign:'center',
                                fontWeight:'bold',
                                fontSize:hp('1.5%'),
                                width:hp('100%')
                  
                              }}>3Kw</Text>
                            
                        </TouchableOpacity>
                                            
                  </View>
                  {/*fin botón*/}
                   {/*botón*/}
                 <View style={{opacity:this.state.opacity2, marginTop:hp('8%'),  borderRadius:30,  backgroundColor:'#9BCA6B', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                      <TouchableOpacity
                
                      onPress={() => this.funcionPotencia(5)}
                                          
                      >
                                                        
                            <Text style={{
                              marginTop:hp('1.1%'),
                              color: 'black',
                              textAlign:'center',
                              fontWeight:'bold',
                              fontSize:hp('1.5%'),
                              width:hp('100%')
                
                            }}>5Kw</Text>
                          
                      </TouchableOpacity>
                                          
                </View>
                {/*fin botón*/}

                                                    {/*botón*/}
                 <View style={{opacity:this.state.opacity3, marginTop:hp('8%'),  borderRadius:30,  backgroundColor:'#CACA6B', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                      <TouchableOpacity
                
                      onPress={() => this.funcionPotencia(7)}
                                          
                      >
                                                        
                            <Text style={{
                              marginTop:hp('1.1%'),
                              color: 'black',
                              textAlign:'center',
                              fontWeight:'bold',
                              fontSize:hp('1.5%'),
                              width:hp('100%')
                
                            }}>7Kw</Text>
                          
                      </TouchableOpacity>
                                          
                </View>
                {/*fin botón*/}


                  {/*botón*/}
                 <View style={{opacity:this.state.opacity4, marginTop:hp('8%'),  borderRadius:30,  backgroundColor:'#CA9B6B', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                    <TouchableOpacity
              
                    onPress={() => this.funcionPotencia(10)}
                                        
                    >
                                                      
                          <Text style={{
                            marginTop:hp('1.1%'),
                            color: 'black',
                            textAlign:'center',
                            fontWeight:'bold',
                            fontSize:hp('1.5%'),
                            width:hp('100%')
              
                          }}>10Kw</Text>
                        
                    </TouchableOpacity>
                                        
              </View>
              {/*fin botón*/}

             {/*botón*/}
                 <View style={{opacity:this.state.opacity5, marginTop:hp('8%'),  borderRadius:30,  backgroundColor:'#CA6B6B', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                    <TouchableOpacity
              
                    onPress={() => this.funcionPotencia2("No viable")}
                                        
                    >
                                                      
                          <Text style={{
                            marginTop:hp('1.1%'),
                            color: 'black',
                            textAlign:'center',
                            fontWeight:'bold',
                            fontSize:hp('1.5%'),
                            width:hp('100%')
              
                          }}>NO VIABLE</Text>
                        
                    </TouchableOpacity>
                                        
              </View>
              {/*fin botón*/}
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
  
  
  