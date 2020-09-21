import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo.jpg'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export var fecha ="Cita por concretar"

export const Calendario = ({ route, navigation }) => {
 

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

  console.log('fecha',fecha)

  return (


    <ImageOverlay 
  
        source={fondo}
        height={"100%"}
        overlayAlpha={0}
          
  
        //resizeMode="stretch"
        //style={styles.fondo} 
        >


    <View>
      <View style={{marginTop:hp('2%')}}>
        <Button onPress={showDatepicker} title="Elige fecha" color='orange'/>
      </View>
      <View style={{marginTop:hp('2%')}}>
        <Button onPress={showTimepicker} title="Elige hora" color='orange'/>
      </View>
      <View style={{marginTop:hp('2%')}}>
        <Button onPress={() => navigation.navigate('Usuarios', {

          fecha: fecha,
        

        }
        )} title="Aceptar" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>

    </ImageOverlay>
  );
};