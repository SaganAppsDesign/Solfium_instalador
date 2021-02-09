import React, { useState } from 'react';
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
//import RNPickerSelect from "react-native-picker-select";




export var nombre, nombre_min
export var codigo_instalador
//console.log('nombre fuera', nombre)


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
     
    //nombre = name
    this.setState({ name })
   
  }



  //instalCode = codigo_instalador => this.setState({ codigo_instalador})
  
  user = () =>  db.ref('/Instaladores/' +  Fire.getUid()).update({

  name: nombre_min,
  //codigo_instalador:this.state.codigo_instalador
  

  }) 

 
 

    render() {

      nombre = this.state.name
      nombre_min = nombre.toLowerCase() 
    
      
      
      //codigo_instalador = this.state.value
      //console.log("codigo_instalador", this.state.value)
      //console.log("name", nombre)

     
          
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
        
       {/*Layer picker
       <View style={{backgroundColor : "",
                alignItems: "center",
                justifyContent  : "center",
                width:wp('90%'),
                height:hp('30%'),
                fontSize:hp('2%'),
                flex:1}
                                         
                }>
          
             <RNPickerSelect
                 onValueChange={(value) => this.setState({ value})}
                 placeholder={{ label: "Seleccione Instalador...", value: null }}
                 style={customPickerStyles}
                 items={[
                     { label: "Instalador1", value: "Instalador1" },
                     { label: "Instalador2", value: "Instalador2" },
                     { label: "Instalador3", value: "Instalador3" },
                     { label: "Instalador4", value: "Instalador4" },
                     { label: "Instalador5", value: "Instalador5" },
                     { label: "Instalador1", value: "Instalador6" },
                 ]}
             />

        </View> */} 

       
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
                 {/*Resultados
                  <TextInput
                    style={styles.nameInput}
                    label="Código"
                    onChangeText={this.instalCode}
                    value={this.state.codigo_instalador}
                    returnKeyType={ 'done' }
                    theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                  
                    
                  />
 */} 
                 
      

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
  
  
  
  const customPickerStyles = StyleSheet.create({
    inputIOS: {
      fontSize: hp('3%'),
      fontWeight:'bold',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1.5,
      borderColor: 'yellow',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30,
      backgroundColor:'orange',
      opacity:1
    },
    inputAndroid: {
      fontSize: 14,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
  
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
  
  
  