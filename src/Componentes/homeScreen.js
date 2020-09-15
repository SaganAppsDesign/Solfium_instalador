import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../../assets/logo.png'; 
import fondo from '../../assets/fondo.jpg'; 
import panel from '../../assets/panel_principal.png'; 
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button} from 'react-native-elements';
import React from 'react';
import { color } from 'react-native-reanimated';



var {height} = Dimensions.get('screen');



export function HomeScreen({ route, navigation }) {
  
    
return (


 
     <View style={styles.container}>


           <View>  

              <ImageOverlay 

                  source={fondo}
                  height={height}
                  resizeMode="stretch"
                  style={styles.fondo} >
                       
                <View>           

                  <View style={[styles.box1]}> 

                    <Image 

                       source={logo} style={styles.logo}
                     >
                      
                    </Image>
                     
                  </View>  


                               
                  
                  <View style={{width:'10%',  height: '10%',marginTop: "0%", marginBottom: "10%",  marginLeft: "0%", marginRight: "0%", flex:10
                  }}> 

                      
                     <View style={{marginTop: "0%", marginBottom: "0%", flex:1}}>
                      <Image 

                        source={panel} style={styles.panel}
                      >
                        
                      </Image>



                      
                      </View>


                      <View style={{marginTop: "0%", marginBottom: "0%", flexDirection:"row", flex:10}}>
                      
                              
                             
                              <View style={{marginTop: "0%", marginBottom: "0%", flex:1}}> 

                                    <TouchableOpacity 
                                      style={styles.boton2}
                                                                  
                                      onPress={() => navigation.navigate('Usuarios')}
                                    >
                                    
                                      <Text style={{ fontSize:18, fontWeight:'bold', textTransform: "uppercase", color: 'black', textAlign:'center'

                                    }}></Text>

                                    </TouchableOpacity>
                              </View> 

                              <View style={{marginTop: "0%", marginBottom: 0, flex:1}}> 

                              <TouchableOpacity 
                                style={styles.boton3}
                                                            
                                onPress={() => navigation.navigate('Calendario')}
                              >
                              
                                <Text style={{ fontSize:18, fontWeight:'bold', textTransform: "uppercase", color: 'black', textAlign:'center'

                              }}></Text>

                              </TouchableOpacity>
                              </View>



                              
                              <View style={{marginTop: "0%", marginBottom: "0%",flex:1}}> 

                                    <TouchableOpacity 
                                      style={styles.boton}
                                                                  
                                      onPress={() => navigation.navigate('Nombre usuario')}
                                    >
                                    
                                      <Text style={{ fontSize:18, fontWeight:'bold', textTransform: "uppercase", color: 'black', textAlign:'center'

                                    }}></Text>

                                    </TouchableOpacity>
                              </View> 

                             
                   
                      </View> 

                  </View>              


                  </View>

               </ImageOverlay>

            </View>  
       
    </View>
     




  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    
  },

       //header
    box1: {
        flex: 2
        
    },
    //content
    box2: {
        flex: 4,
        alignItems: 'center'
        
    },
    //footer
    box3: {
        flex: 7,
        alignItems: 'center',
        marginBottom:'5%',
        marginTop:'0%'

        
    },

  logo: {
    
    width: "55%",
    height: "55%",
    marginBottom: "0%",
    marginTop: "10%",
    marginLeft: "25%",
    marginRight: "0%"
    
    
  },

  panel: {
    
    width: 400,
    height: 400,
    marginBottom: "90%",
    marginTop: "2%",
    marginLeft: "0%",
    marginRight: "0%"
    
    
  },

  boton: {
    
     
     height: 40, 
     width:'40%',
     marginBottom: "50%", 
     marginTop: "3%", 
     marginLeft: '60%', 
     marginRight: '1%',
     alignItems: "center",
     padding: 0, 
     backgroundColor: 'rgba(255,255,255,0)'
    
    
    
  },
  boton2: {
    
     
    height: 40, 
    width:'40%',
    marginBottom: "50%", 
    marginTop: "3%", 
    marginLeft: '5%', 
    marginRight: '1%',
    alignItems: "center",
    padding: 0, 
    backgroundColor: 'rgba(255,255,0,0)'
   
   
   
 },

 boton3: {
    
     
  height: 40, 
  width:'40%',
  marginBottom: "100%", 
  marginLeft: "75%", 
  marginTop: "3%", 
  marginRight: '1%',
  alignItems: "center",
  padding: 0, 
  backgroundColor: 'rgba(0,255,0,0)'
 
 
 
},


  texto: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 15,
    marginBottom: 20,
    fontWeight: 'bold'
    
    
  },
 
  fondo: {
    width: '100%'
    
    
  },
  btnContainer3: {
   
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2196F3',
    padding: 5,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:310,
    height:180,
    marginBottom:2, marginTop:0
  },

  btnContainer4: {
   
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2196F3',
    padding: 1,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:'90%',
    height:'15%',
    marginBottom:5, 
    marginTop:0,
    margin:'5%'
  }
  

});

