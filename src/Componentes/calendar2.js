import React, {useState, useEffect} from 'react';
import {View, Button, Platform, TouchableOpacity, StyleSheet, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo.jpg'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export var fecha = '', currentDate
var opacity = 0.5
var bool = true

export const Calendario = ({ navigation }) => {


  useEffect(function () {
    //console.log('render!')
    opacity = 0.5
    bool = true
  })
 

  

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showTime, setShowTime] = useState(false);

 

  const onChange = (event, selectedDate) => {

    //selectedDate = date.setTime(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
    currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    opacity = 1
    bool = false
    console.log('currentDate:  ', currentDate)
    //console.log('date dentro de funcion:  ', date) 
    //console.log('fecha:  ', fecha)
    
    //console.log(event.actualDuration = '10')
    //var fecha = new Date();
  //var fecha2 = currentDate.setTime(currentDate.getTime() - currentDate.getTimezoneOffset() * 60 * 1000);
  //console.log('fecha222222:  ', new Date(fecha2))
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
    opacity = 0.5
    bool = true
    
  };

  fecha = date
  //fecha2 = date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
   console.log('date fuera de funcion 2:  ', fecha)
  //fecha = new Date(currentDate)
  
  

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
                        color: 'orange',
                        padding:hp('1%'),
                        //width:wp('10%') ,                     
                        textAlign:'center',
                        fontWeight: 'bold',
                        backgroundColor:'grey'

                      }}>1º SELECCIONA FECHA</Text>
                          
                  </TouchableOpacity>

                  
                  
                  <TouchableOpacity
                          opacity= {opacity}
                          disabled={bool}
                          onPress={showTimepicker}
                          >
     
                    {/* <Icon
                      name="hourglass-start"
                      size={50}
                      color="black"
                      style={styles.btnIcon}/> */}

                    <Text style={{
                    fontSize: 18,
                    color: 'orange',
                    marginLeft: 0,
                    marginTop: hp('1%'),
                    textAlign:'center',
                    fontWeight: 'bold',
                    backgroundColor:'grey',
                    padding:hp('1%'),
                    opacity:opacity
                    

                  }}>2ª SELECCIONA HORA</Text>
                
            </TouchableOpacity>
            
          </View>

    

      {/* Función DatePicker */}

        <View style={{
            
            justifyContent: 'center',
            backgroundColor:'#F3D3B5',        
            textAlign:'center',
            flex:8,
            width:wp('80%'),
            height:hp('100%'),
            marginBottom:hp('10%'), marginTop:hp('10%'),
            borderRadius:30
                        
          }}>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  //dateFormat="dayofweek day month"
                  initialValue={date}
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  timeZoneOffsetInMinutes={0}
             
                  
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