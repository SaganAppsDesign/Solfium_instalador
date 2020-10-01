import React, {useState} from 'react';
import {View, Button, Platform, TouchableOpacity, StyleSheet, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo.jpg'; 
//import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export var fecha;

export const Calendario = ({ navigation }) => {
 

  const [date, setDate] = useState(Date.now());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  fecha = date

   

  return (


    <ImageOverlay 
  
        source={fondo}
        height={hp('100%')}
        overlayAlpha={0}
         
        >


    <View style={{flex:1, alignItems:'center', width:wp('100%'), height:hp('100%')}}>
    
          <View  style={{
          
                        justifyContent: 'center',
                        borderRadius: 15,
                        
                        textAlign:'center',
                        flex:1,
                        width:wp('60%'),
                        height:hp('7%'),
                        marginBottom:hp('0%'), marginTop:hp('10%')
                                    
                      }}>
            <TouchableOpacity
                    onPress={showDatepicker}
                    >
                    
                      {/* <Icon
                        name="calendar"
                        size={50}
                        color="black"
                        style={styles.btnIcon}/> */}
          
                      <Text style={{
                        fontSize: 18,
                        color: '#FAFAFA',
                        padding:hp('1%'),
                        //width:wp('10%') ,                     
                        textAlign:'center',
                        fontWeight: 'bold',
                        backgroundColor:'grey'

                      }}>1º SELECCIONA FECHA</Text>
                          
                  </TouchableOpacity>

                  <TouchableOpacity
                        // disabled={true}
                          onPress={showTimepicker}
                          >
     
                    {/* <Icon
                      name="hourglass-start"
                      size={50}
                      color="black"
                      style={styles.btnIcon}/> */}

                    <Text style={{
                    fontSize: 18,
                    color: '#FAFAFA',
                    marginLeft: 0,
                    marginTop: hp('1%'),
                    textAlign:'center',
                    fontWeight: 'bold',
                    backgroundColor:'grey',
                    padding:hp('1%'),

                  }}>2ª SELECCIONA HORA</Text>
                
            </TouchableOpacity>
            
          </View>

    

{/* 
      <View style={{marginTop:hp('2%')}}>
        <Button onPress={() => navigation.navigate('Usuarios', {

          fecha: fecha,
        

        }
        )} title="Aceptar" />
      </View> */}

        <View style={{
            
            justifyContent: 'center',
            
            
            textAlign:'center',
            flex:5,
            width:wp('100%'),
            height:hp('100%'),
            marginBottom:hp('10%'), marginTop:hp('10%')
                        
          }}>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  //dateFormat="dayofweek day month"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  //display="default"
                  onChange={onChange}
                />
              )}


        </View>

        <View style={{
            
            justifyContent: 'center',
            borderRadius: 15,
            backgroundColor: 'green',
            textAlign:'center',
            flex:1,
            width:wp('30%'),
            height:hp('5%'),
            marginBottom:hp('10%'), marginTop:hp('0%')
                        
          }}>

            <TouchableOpacity
            onPress={() => navigation.navigate('Usuarios')}
            >

            <Text style={styles.btnText}>ACEPTAR</Text>

            </TouchableOpacity>
        </View>
      
    </View>

    </ImageOverlay>
  )
}


const styles = StyleSheet.create({


  btnContainer1: {
    
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#E13F0B',
    
    textAlign:'center',
    
    flex:1,
    width:wp('45%'),
    height:hp('8%'),
    marginBottom:hp('0%'), marginTop:hp('20%')

  
  },


  btnContainer3: {
    
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#E13F0B',
    
    textAlign:'center',
    
    flex:1,
    width:wp('45%'),
    height:hp('8%'),
    marginBottom:hp('0%'), marginTop:hp('5%')

  
  },

   

  btnContainer2: {
    
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'green',
    flex:1,
    textAlign:'center',
    
    flexDirection: 'column',
    width:wp('45%'),
    height:hp('8%'),
    marginBottom:hp('0%'), marginTop:hp('10%')

  
  },
  btnIcon: {
    height: 50,
    width: 50,
  },
  btnText: {
    fontSize: 18,
    color: '#FAFAFA',
    marginLeft: 0,
    marginTop: 5,
    textAlign:'center',
    fontWeight: 'bold'

  },

  btnText2: {
    fontSize: 15,
    color: '#FAFAFA',
    marginLeft: 0,
   
    textAlign:'center',
    fontWeight: 'bold'

  }
 

});