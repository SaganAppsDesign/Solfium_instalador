import React from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  View, Image
} from 'react-native';
import Fire, {db} from '../../fire';
import fondo from '../../assets/fondo5.jpg'; 
import { TextInput } from 'react-native-paper';
import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logo from '../../assets/logo.png'; 


export var nombre

export class PantallaInicial extends React.Component {
 
  state = {

    name: '',

  }

 

  onPress = () =>
  
    this.props.navigation.navigate('Usuarios', { 
        
        name: this.state.name 
           
    }
    
    );

  onChangeText = name => this.setState({ name });

  
  user = () =>  db.ref('/Instaladores/Instalador1/').update({
   
    name: this.state.name

   
   
    //fecha: fecha,
  
    })

    /* OLD CODE user = () =>  db.ref('/Instaladores/' +  Fire.getUid()).update({
   
      name: this.state.name
  
     
     
      //fecha: fecha,
    
      }) */

 

    render() {

      nombre = this.state.name
          
      return (
        <ImageOverlay 
  
        source={fondo}
        height={"100%"}
        overlayAlpha={0}
          
  
        //resizeMode="stretch"
        //style={styles.fondo} 
        >
      
        <View style={{height:'100%', width:'100%', alignItems:'center', flex:1}}>

        <View style={{flex: 1, width:wp('100%'), height:wp('10%'), alignItems:'center', marginBottom: hp('1%')
                          
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
  
     <KeyboardAvoidingView  enabled keyboardVerticalOffset={50}
        style={{height:'100%', width:'100%', flex:5}}>
      
         <ScrollView style={{marginTop:'0%', height:'100%', width:'100%'}}> 
         
                <View style={{marginTop:'30%', height:'100%', width:'100%', flex:6,  alignItems:'center'}}>
                  <TextInput
                    style={styles.nameInput}
                    label="Nombre"
                    onChangeText={this.onChangeText}
                    value={this.state.name}
                    returnKeyType={ 'done' }
                    theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                    
  
                    
                  />


                <View style={{marginTop:hp('0%'), height:hp('20%'), width:wp('100%'), flex:1, alignItems:'center'}}>
                  <TouchableOpacity onPress={
                    () => { this.onPress(); this.user()}
                  }
                  >
                   <Text style={styles.buttonText}>Ingrese en su sesión</Text>
                  </TouchableOpacity>

              </View>



  
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
      height: '40%',
      marginLeft: '0%',
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
      marginLeft: '0%',
      marginTop:'0%',
      fontSize: 20,
      marginBottom:'5%',
      fontWeight:'bold',
      backgroundColor: '#DD650C',
      width:'40%',
      height:'50%',
      borderRadius: 10,
      textAlign:'center',
      padding:'3%'
   
    },
  });
  
  
  