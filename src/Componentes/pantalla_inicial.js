import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Image
} from 'react-native';

import fondo from '../../assets/fondo5.jpg'; 
import { TextInput } from 'react-native-paper';
import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logo from '../../assets/logo.png'; 
import Fire, {db} from '../../fire';


export var nombre, nombre_min
export var codigo_instalador

export class PantallaInicial extends React.Component {
 
  state = {

    name: '',
    codigo_instalador:'',
    value:''
   

  }
  

  onPress = () =>

    this.props.navigation.navigate('Usuarios', { 
        
        name: this.state.name 
           
    }
    
    );

  onChangeText = name => {

    this.setState({ name })
   
  }
 
  user = () =>  db.ref('/Instaladores/' +  Fire.getUid()).update({

  name: nombre_min,
 

  }) 

 
 

    render() {

      nombre = this.state.name
      nombre_min = nombre.toLowerCase() 
     
          
      return (
        <ImageOverlay 
  
        source={fondo}
        height={700}
        overlayAlpha={0}
     
        >
      
        <View style={{height:hp('100%'), width:wp('100%'), alignItems:'center', flex:1}}>
       {/*Layer logo*/} 
        <View style={{flex: 0.7, width:wp('100%'), height:wp('20%'), alignItems:'center', marginBottom: hp('1%')                       
        }}> 

               <Image 

                     source={logo} style={{

                      aspectRatio:2.78,
                       height: hp('12%'),
                       marginBottom: hp('0%'),
                       marginTop:  hp('10%'),
                       borderRadius:10
                      
                                                   
                     }}
               >
                 
               </Image>
     
       </View> 
            
      {/*Introduce nombre */}
      <View style={{flex: 1, width:wp('100%'), height:wp('20%'), alignItems:'center', marginBottom: hp('-10%') }}>                     

          <TextInput
            style={styles.nameInput}
            label="Nombre"
            onChangeText={this.onChangeText}
            value={this.state.name}
            returnKeyType={ 'done' }
            theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
          
            
          />
          
        </View>
                
     {/*Ingrese en sesión*/} 
        <View style={{borderRadius:160,  marginTop:hp('0%'), height:hp('80%'), width:wp('10%'), flex:1, alignItems:'center'}}>
              <TouchableOpacity onPress={
                () => { this.onPress();this.user()}
              }
              >
                <Text style={styles.buttonText}>Ingrese en su sesión</Text>
              </TouchableOpacity>

          </View>

       
    </View>

  
    </ImageOverlay>
      )

      
    }

  }
  
  
  
  
  const styles = StyleSheet.create({
   
    nameInput: {
      height:hp('10%'),
      marginLeft: '0%',
      marginTop:hp('2%'),
      marginBottom:hp('2%'),
      width:hp('35%'),
      paddingHorizontal: wp('2%'),
      backgroundColor: 'white',
      fontSize:hp('3%'),
      fontWeight: 'bold',
      borderRadius: 2,
     
     
    },
    buttonText: {
     
      fontSize: hp('3%'),
      fontWeight:'bold',
      color:'white',
      width:wp('80%'),
      height:hp('8%'),
      borderRadius: 20,
      textAlign:'center',
      padding:hp('2%'),
      marginTop:hp('2%')
   
    },
    container : {
      flex            : 1,
      backgroundColor : "#fff",
      alignItems      : "center",
      justifyContent  : "center",
  },
  });
  
  
  