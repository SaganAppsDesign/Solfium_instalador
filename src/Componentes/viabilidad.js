import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View} from 'react-native';
import {db} from '../../fire';
import fondo from '../../assets/fondo5.jpg'; 

import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export var viabilidad ="Viabilidad por concretar"
export var potenciaSistema ="Por concretar"


export class Viabilidad extends React.Component {

 
  state = {

    viabilidad: '',
    potenciaSistema:'',
    opacity:1

  }

  
  funcionPotencia(potenciaSistema, key) {
    
    
    //alert("Has elegido " + potenciaSistema + "Kw de potencia")
        
    db.ref('/Usuarios/' + key).update({

      potenciaContratada: potenciaSistema

      })

      this.props.navigation.navigate('Usuarios')

}

 
    render() {
      const { route } = this.props;
      const { key } = route.params;
     
        viabilidad = this.state.viabilidad
        potenciaSistema= this.state.potenciaSistema
        
      return (
        <ImageOverlay 
  
        source={fondo}
        height={"100%"}
        overlayAlpha={0}
          
  
        >
      
        <View style={{height:hp('80%'), width:wp('100%'), alignItems:'center', flex:1}}>

                {/*botón*/}
                <View style={{opacity:this.state.opacity,  marginTop:hp('8%'),  borderRadius:30,  backgroundColor:'#6BCA9B', 
                alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('100%')  }}>
                                                         
                      <TouchableOpacity
                
                      onPress={() => this.funcionPotencia(1.5, key)}
                                          
                      >
                                                        
                            <Text style={{
                              marginTop:hp('1.1%'),
                              color: 'black',
                              textAlign:'center',
                              fontWeight:'bold',
                              fontSize:hp('1.5%'),
                              width:hp('100%'),
                              height:hp('4%'),
                              }}>1.5Kw</Text>
                          
                      </TouchableOpacity>
                                          
                </View>
                {/*fin botón*/}

                 {/*botón*/}
                 <View style={{opacity:this.state.opacity,  marginTop:hp('6%'),  borderRadius:30,  backgroundColor:'#6BCA9B', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                        <TouchableOpacity
                  
                        onPress={() => this.funcionPotencia(3, key)}
                                            
                        >
                                                          
                              <Text style={{
                                marginTop:hp('1.1%'),
                                color: 'black',
                                textAlign:'center',
                                fontWeight:'bold',
                                fontSize:hp('1.5%'),
                                width:hp('100%'),
                                height:hp('4%'),
                  
                              }}>3Kw</Text>
                            
                        </TouchableOpacity>
                                            
                  </View>
                  {/*fin botón*/}
                   {/*botón*/}
                 <View style={{opacity:this.state.opacity2, marginTop:hp('6%'),  borderRadius:30,  backgroundColor:'#9BCA6B', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                      <TouchableOpacity
                
                      onPress={() => this.funcionPotencia(5, key)}
                                          
                      >
                                                        
                            <Text style={{
                              marginTop:hp('1.1%'),
                              color: 'black',
                              textAlign:'center',
                              fontWeight:'bold',
                              fontSize:hp('1.5%'),
                              width:hp('100%'),
                              height:hp('4%'),
                
                            }}>5Kw</Text>
                          
                      </TouchableOpacity>
                                          
                </View>
                {/*fin botón*/}

                {/*botón*/}
                 <View style={{opacity:this.state.opacity3, marginTop:hp('6%'),  borderRadius:30,  backgroundColor:'#CACA6B', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                      <TouchableOpacity
                
                      onPress={() => this.funcionPotencia(7, key)}
                                          
                      >
                                                        
                            <Text style={{
                              marginTop:hp('1.1%'),
                              color: 'black',
                              textAlign:'center',
                              fontWeight:'bold',
                              fontSize:hp('1.5%'),
                              width:hp('100%'),
                              height:hp('4%')
                
                            }}>7Kw</Text>
                          
                      </TouchableOpacity>
                                          
                </View>
                {/*fin botón*/}


                  {/*botón*/}
                 <View style={{opacity:this.state.opacity4, marginTop:hp('6%'),  borderRadius:30,  backgroundColor:'#CA9B6B', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                    <TouchableOpacity
              
                    onPress={() => this.funcionPotencia(10, key)}
                                        
                    >
                                                      
                          <Text style={{
                            marginTop:hp('1.1%'),
                            color: 'black',
                            textAlign:'center',
                            fontWeight:'bold',
                            fontSize:hp('1.5%'),
                            width:hp('100%'),
                            height:hp('4%')
              
                          }}>10Kw</Text>
                        
                    </TouchableOpacity>
                                        
              </View>
              {/*fin botón*/}

             {/*botón*/}
                 <View style={{opacity:this.state.opacity5, marginTop:hp('6%'),  borderRadius:30,  backgroundColor:'#CA6B6B', alignItems:'center', textAlign:'center', flex:0.1, borderWidth:1, width:wp('80%'), height:hp('5%')  }}>
                                                         
                    <TouchableOpacity
              
                    onPress={() => this.funcionPotencia("No viable", key)}
                                        
                    >
                                                      
                          <Text style={{
                            marginTop:hp('1.1%'),
                            color: 'black',
                            textAlign:'center',
                            fontWeight:'bold',
                            fontSize:hp('1.5%'),
                            width:hp('100%'),
                            height:hp('4%')
              
                          }}>NO VIABLE</Text>
                        
                    </TouchableOpacity>
                                        
              </View>
              {/*fin botón*/}
        </View>
  
      
        </ImageOverlay>
      );
    }
  }
  
  
  
  
  
  
  