import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';



export class Main extends React.Component {

 
  state = {

    name: '',

  }

  onPress = () =>
  
    this.props.navigation.navigate('Chat', { 
        
        name: this.state.name 
           
    }
    
    );

  onChangeText = name => this.setState({ name });

 

  render() {

    

    const { navigate } = this.props.navigation;  

    return (
      <View>
        <Text style={styles.title}>Introduce tu nombre de usuario:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Gandalf El Gris"
          onChangeText={this.onChangeText}
          value={this.state.name}
          
        />
        <TouchableOpacity onPress={this.onPress}
        >
         <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const offset = 24;

const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});


