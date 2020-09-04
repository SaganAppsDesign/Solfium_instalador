import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Fire, {db} from '../../fire';



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

  
  user = () =>  db.ref('/Instaladores/' +  Fire.getUid()).update({
    name: this.state.name
   
    //fecha: fecha,
  
    })

 

  render() {

     
    const { navigate } = this.props.navigation;  

    return (
    
      
      <View style={{backgroundColor:'orange', height:'100%'}}>
        <Text style={styles.title}>Nombre Instalador:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Gandalf El Gris"
          onChangeText={this.onChangeText}
          value={this.state.name}
          
        />
        <TouchableOpacity 
          onPress={
          () => { this.onPress(); this.user()}
         }
        >
         <Text style={styles.buttonText}>Chat aquí</Text>
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
    fontSize: 20,
    fontWeight:'bold'
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 2,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: 20,
    fontWeight:'bold',
    backgroundColor: '#DD650C',
    width:'30%',
    height:'22%',
    borderRadius: 10,
    textAlign:'center'
  },
});


