import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export var fecha ="Define cita"

export const Calendario = ({ route, navigation }) => {


  

  const [date, setDate] = useState(new Date(1598051730000));
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
    <View>
      <View>
        <Button onPress={showDatepicker} title="Elije fecha" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Elije hora" />
      </View>
      <View>
        <Button onPress={() => navigation.navigate('Usuarios', {

          fecha: fecha,
        

        }
        )} title="Enviar cita!" />
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
  );
};