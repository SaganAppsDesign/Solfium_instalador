import React from 'react';
import {
  StyleSheet,
  
  FlatList,
  TouchableOpacity,
  LogBox,
  View,

} from 'react-native';

import { Card, CardItem, Text, Body, Icon, Right } from 'native-base';

import Fire, {db} from '../../fire';


//console.warn(ListItem)

var idUsuario
export class Usuarios extends React.Component {
 
    constructor(props) {
        super(props)
        this.state = {
          list: [] 
          
        }
        
      }

      viabilidadTotal(key) {
        
        
        db.ref('/Usuarios/' + key).update({
        Viabilidad: '100%'
           });
            
     
    }

      viabilidadParcial(key) {
        
        
          db.ref('/Usuarios/' + key).update({
          Viabilidad: '50%'
             });
              
       
      }

   
    
    
    
      noViable(key) {
        db.ref('/Usuarios/' + key).update({
          Viabilidad: '0%',
          uid: Fire.getUid()
          
        });
           
             }
    
      
      evaluando(key) {
        db.ref('/Usuarios/' + key).update({
          Viabilidad: 'evaluando'
          
        });
           
        
      }
    
    
      clearViabilidad() {
        db.ref('/Usuarios/' + key).remove();
      }
 

  render() {

        
        //console.warn(list)

    return (

       

    <View style={{flex:1, alignSelf:'center', justifyContent:'center'}}>
       
                    
     <FlatList data={this.state.list} 
               renderItem={({ item }) => 
        <Card style={{textAlign: 'center', alignItems:'center', backgroundColor:"white", borderRadius:7, height:250}}> 
        <CardItem header  bordered> 
        <Text>ID: {item.key}</Text> 
        </CardItem> 
        <CardItem bordered> 
            <Text style={{fontWeight:'bold', fontSize:15}}>Nombre cliente: {item.name}</Text> 
        </CardItem> 
        <View style={{flexDirection:'column', flex:1,height:'2%', marginBottom:0}}>
            <CardItem  style={{backgroundColor:'green', height:'2%'}} button onPress={() => this.viabilidadTotal(item.key)} > 
                               
                <Text style={{textAlign: 'center', alignItems:'center',fontSize:15}}>Viabilidad 100%</Text> 
            
            </CardItem>

            <CardItem  style={{backgroundColor:'orange', height:'2%'}} button onPress={() => this.viabilidadParcial(item.key)}> 
                    <Text>Viabilidad a la baja</Text> 
            </CardItem>

            <CardItem style={{backgroundColor:'red', height:'2%'}} button onPress={() => this.noViable(item.key)}> 
                <Text>No viable</Text> 
            </CardItem>

            <CardItem bordered style={{backgroundColor:'grey', height:'2%'}} button onPress={() => this.evaluando(item.key)}> 
            <Text>Evaluando</Text> 
            </CardItem>
       </View>

        <CardItem bordered footer style={{ weight: '100',height:'2%', backgroundColor:'yellow', margin:'0%'}}> 
            <Text style={{fontWeight:'bold', fontSize:15}}>Evaluación Final: {item.viabilidad}</Text> 
        </CardItem> 
       
     </Card> 
    } />

     </View>

      
    );

   
  }


  componentDidMount(){

    LogBox.ignoreLogs(["Setting a timer"]);
         

    db.ref('/Usuarios/').on('value', (snapshot) =>{
        var li = []
                  
        snapshot.forEach((child)=>{
         li.push({
                  key: child.key,
                  name:child.val().name,
                  viabilidad:child.val().Viabilidad
          
        })
      })


   this.setState({list:li})
  
  })
 }



}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      //flexDirection: 'row',
      
    }
})  

