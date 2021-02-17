import React, {useState, useEffect} from 'react';
import {View, Platform, TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo5.jpg'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export var fecha = '', currentDate
var opacity = 0.5

export const Calendario = ({ navigation }) => {


  useEffect(function () {
  
    opacity = 0.5
  })
 

  

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [] = useState(false);

 

  const onChange = (event, selectedDate) => {

    currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    opacity = 1

  }

 

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('datetime');
       
    
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
                        backgroundColor:'orange',
                        justifyContent: 'center',
                        borderRadius:10,
                        textAlign:'center',
                        flex:1,
                        width:wp('80%'),
                        height:hp('10%'),
                        marginBottom:hp('0%'), marginTop:hp('5%')
                                    
                      }}>
            <TouchableOpacity
                    onPress={showDatepicker}
                    >
                                              
                      <Text style={{
                        fontSize: 18,
                        color: 'black',
                        padding:hp('1%'),
                        //width:wp('100%') ,                     
                        textAlign:'center',
                        fontWeight: 'bold'
                        

                      }}>SELECCIONA FECHA Y HORA</Text>
                          
                  </TouchableOpacity>
     
            
          </View>

    

      {/* Función DatePicker */}

        <View style={{
            
            justifyContent: 'center',
            textAlign:'center',
            flex:8,
            width:wp('85%'),
            height:hp('100%'),
            marginBottom:hp('10%'), marginTop:hp('5%'),
            borderRadius:30
                        
          }}>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  initialValue={date}
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  timeZoneOffsetInMinutes={0}
                  locale={"es-mx"} 
             
                  
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
            marginBottom:hp('25%'), marginTop:hp('0%')
                        
          }}>

            <TouchableOpacity
            onPress={() => navigation.navigate('Usuarios')}
            >

            <Text style={{fontSize: 18,
                          color: '#FAFAFA',
                          textAlign:'center',
                          fontWeight: 'bold'}}>ACEPTAR</Text>

            </TouchableOpacity>
        </View>
      
    </View>

    </ImageOverlay>
  )
}
