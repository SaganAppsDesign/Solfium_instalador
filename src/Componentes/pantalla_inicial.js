import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Image
} from 'react-native';
import  {db} from '../../fire';
import fondo from '../../assets/fondo5.jpg'; 
import { TextInput } from 'react-native-paper';
import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logo from '../../assets/logo.png'; 


export var nombre
export var codigo_instalador
console.log('nombre fuera', nombre)



export class PantallaInicial extends React.Component {
 
  state = {

    name: '',
    codigo_instalador:''

  }

 

  onPress = () =>

    this.props.navigation.navigate('Usuarios', { 
        
        name: this.state.name 
           
    }
    
    );

  onChangeText = name => {
     
    nombre = name
    this.setState({ name })
    console.log('nombre', nombre)
    console.log('name', name)
  
  }



  instalCode = codigo_instalador => this.setState({ codigo_instalador})
  
  user = () =>  db.ref('/Instaladores/' +  this.state.codigo_instalador).update({

  name: this.state.name,
  codigo_instalador:this.state.codigo_instalador
  

  }) 

 

    render() {

      nombre = this.state.name
      codigo_instalador = this.state.codigo_instalador
          
      return (
        <ImageOverlay 
  
        source={fondo}
        height={700}
        overlayAlpha={0}
     
        >
      
        <View style={{height:hp('100%'), width:wp('100%'), alignItems:'center', flex:1}}>

        <View style={{flex: 1, width:wp('100%'), height:wp('20%'), alignItems:'center', marginBottom: hp('1%')                       
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
   <View style={{flex: 3, width:wp('100%'), height:hp('10%'), alignItems:'center', marginBottom: hp('1%'),  marginTop: hp('10%')                       
      }}> 
     
            
            <View style={{height:hp('10%'), width:wp('100%'), flex:1,  alignItems:'center'}}>
                  <TextInput
                    style={styles.nameInput}
                    label="Nombre"
                    onChangeText={this.onChangeText}
                    value={this.state.name}
                    returnKeyType={ 'done' }
                    theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                  
                    
                  />

                  <TextInput
                    style={styles.nameInput}
                    label="Código"
                    onChangeText={this.instalCode}
                    value={this.state.codigo_instalador}
                    returnKeyType={ 'done' }
                    theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                  
                    
                  />




              <View style={{borderRadius:160,  marginTop:hp('5%'), height:hp('80%'), width:wp('10%'), flex:1, alignItems:'center'}}>
                  <TouchableOpacity onPress={
                    () => { this.onPress(); this.user()}
                  }
                  >
                   <Text style={styles.buttonText}>Ingrese en su sesión</Text>
                  </TouchableOpacity>

              </View>

            </View>
     
   

               
          </View> 
        </View>
  
      
        </ImageOverlay>
      );
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
      backgroundColor: '#DD650C',
      width:wp('80%'),
      height:hp('8%'),
      borderRadius: 20,
      textAlign:'center',
      padding:hp('2%')
   
    },
  });
  
  
  