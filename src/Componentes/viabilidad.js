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
    //console.log(this.state.potenciaSistema)
    
    
  }



  
  viabilidad = () =>  db.ref('/Instaladores/' +  Fire.getUid()).update({
    viabilidad: this.state.viabilidad
     
    })

   

  

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
  
      
      
                <View style={{marginTop:hp('10%'),   width:wp('70%'), height:hp('0.5%'),backgroundColor:'#E0E62C', flex:0.1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                         <Button  title='3Kw' color='black' onPress={() => this.funcionPotencia(3)}></Button>
                </View>

                <View style={{marginTop:hp('5%'),   width:wp('70%'), alignItems:'center', width:wp('70%'), backgroundColor:'#E3557C', flex:0.1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                         <Button  title='5Kw' color='black' onPress={() => this.funcionPotencia(5)}></Button>
                </View>

                <View style={{marginTop:hp('5%'),   width:wp('70%'), backgroundColor:'#7CA4D9', flex:0.1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                         <Button  title='7Kw' color='black' onPress={() => this.funcionPotencia(7)}></Button>
                </View>

                <View style={{marginTop:hp('5%'),   width:wp('70%'), backgroundColor:'#63BA6A', flex:0.1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                         <Button  title='10Kw' color='black' onPress={() => this.funcionPotencia(10)}></Button>
                </View>

                <View style={{marginTop:hp('5%'), marginBottom:hp('5%'),  width:wp('70%'), backgroundColor:'red', flex:0.1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                         <Button  title='No viable' color='white' onPress={() => this.funcionPotencia("No viable")}></Button>
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
  
  
  