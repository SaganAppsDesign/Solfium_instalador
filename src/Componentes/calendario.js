import React, {useState} from 'react';
import {View, Button, Platform, TouchableOpacity, StyleSheet, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo.jpg'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export var fecha ="Cita por concretar"

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

  console.log('fecha Calendario',fecha)

  return (


    <ImageOverlay 
  
        source={fondo}
        height={"100%"}
        overlayAlpha={0}
          
  
        //resizeMode="stretch"
        //style={styles.fondo} 
        >


    <View>
    

      <TouchableOpacity
              onPress={showDatepicker}
              >
              <View
                style={styles.btnContainer1}>
                <Icon
                  name="calendar"
                  size={50}
                  color="black"
                  style={styles.btnIcon}/>
    
                <Text style={styles.btnText}>FECHA</Text>
              </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={showTimepicker}
      >
      <View
        style={styles.btnContainer1}>
        <Icon
          name="hourglass-start"
          size={50}
          color="black"
          style={styles.btnIcon}/>

        <Text style={styles.btnText}>HORA</Text>
      </View>
    </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('Usuarios')}
      >
      <View
        style={styles.btnContainer2}>
        <Icon
          name="thumbs-up"
          size={50}
          color="black"
          style={styles.btnIcon}/>

        <Text style={styles.btnText}>ACEPTAR</Text>
      </View>
    </TouchableOpacity>

{/* 
      <View style={{marginTop:hp('2%')}}>
        <Button onPress={() => navigation.navigate('Usuarios', {

          fecha: fecha,
        

        }
        )} title="Aceptar" />
      </View> */}


      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          //dateFormat="dayofweek day month"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>

    </ImageOverlay>
  )
}


const styles = StyleSheet.create({


  btnContainer1: {
    
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#E13F0B',
    padding: 15,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:300,
    height:100,
    marginBottom:'2%', marginTop:'2%'

  
  },
  

  btnContainer2: {
    
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'green',
    padding: 15,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:300,
    height:100,
    marginBottom:'2%', marginTop:'2%'

  
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

  }
 

});