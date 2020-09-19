import React from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  LogBox,
  View,
  Image,ScrollView, Button

} from 'react-native';

import { Card, CardItem, Text, Body, Icon, Right } from 'native-base';
import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Fire, {db} from '../../fire';
import fondo from '../../assets/fondo.jpg'; 
import {fecha} from './calendario';


export class Usuarios extends React.Component {

 
    constructor(props) {
        super(props)
        this.state = {
          list: []
                   
        }
        
      }

     cita(key) {

    
        
        db.ref('/Usuarios/' + key).update({

          cita: fecha

           });
    
     
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
    
    
      clearViabilidad(key) {
        db.ref('/Usuarios/' + key).remove();
      }
 

  render() {

   
    console.log(this.state.list)     
    console.log('fecha usuario',   fecha)

    return (




   <ImageOverlay 

       source={fondo}
       height={hp('100%')}  
       overlayAlpha={0}             
       >
          <View style={{flex:1,  justifyContent:'center', backgroundColor:'rgba(0,0,0,0)', width:'85%', height:hp('100%'), marginTop:hp('1%')}}>
                      
                        <ScrollView>           
                        <FlatList data={this.state.list} 
                                  renderItem={({ item }) => 
                          
                        <Card style={{textAlign: 'center', alignItems:'center', backgroundColor:"white", borderRadius:10, height:hp('20%'), flex:1}}> 
                       
                                                     
                            <View style={{flexDirection:'row', flex:1, height:hp('1%'), marginTop:hp('1%')}}>
                            
                                <View style={{flex:4}}>
                                    <Text style={{fontWeight:'bold', fontSize:hp('3%'),  textAlign:'center'}}>{item.name}</Text> 
                                </View>    
                               
                                <View style={{flex:2}}>
                         
                                    <Button  title='chat' color='#1E3EDE' onPress={() => this.props.navigation.navigate('Instalador')}></Button>
                                                                 
                                </View>

                                <View style={{flex:3, fontSize:hp('0.5%')}}>
                         
                                    <Button  title='Calend' color='#A0E1F7' onPress={() => this.props.navigation.navigate('Calendario')}></Button>
                                </View>
                                <View style={{flex:3, fontSize:hp('0.5%')}}>
                         
                                <Button  title='Cita' color='#A0E1F7' onPress={() => this.cita(item.key)}></Button>
                            </View>

                            </View>
                         
                           <View style={{flexDirection:'row', flex:1, height:'2%', marginTop:'3%'}}>
                            <View style={{flexDirection:'column', flex:1, height:'2%', marginBottom:0}}>
                         
                                <Button  title='100%' color='green' onPress={() => this.viabilidadTotal(item.key)}> 
                                  
                                </Button>
                            </View>
                            <View style={{flexDirection:'column', flex:1, height:'2%', marginBottom:0}}>
                                <Button  title='50%' color='orange' onPress={() => this.viabilidadParcial(item.key)}> 
                                  
                                </Button>
                            </View>
                            <View style={{flexDirection:'column', flex:1, height:'2%', marginBottom:0}}>
                                <Button  title='0%' color='red' onPress={() => this.noViable(item.key)}> 
                                  
                                </Button>
                             </View>
                             <View style={{flexDirection:'column', flex:1, height:'2%', marginBottom:0}}>
                                <Button  title='Eval' color='grey' onPress={() => this.evaluando(item.key)}> 
                                  
                                </Button>
                            </View>

                           
                            
                      </View>
                      <View style={{ height:'1%', backgroundColor:'orange', marginTop:'5%', marginBottom:'0%', flex:1,justifyContent:'center'}}> 
                      <Text style={{fontWeight:'bold', fontSize:15, padding:10}}>Cita: {item.cita}</Text> 
                     </View>
                      <View style={{ height:'1%', backgroundColor:'#DDD00C', marginTop:'0%', marginBottom:'0%', flex:1,justifyContent:'center'}}> 
                                  <Text style={{fontWeight:'bold', fontSize:15, padding:10}}>Evaluación Final: {item.viabilidad}</Text> 
                      </View>
                      
                      
                       
                   
                    </Card> 

                   
                    } />

                         
                    </ScrollView>
                 
                    </View>

          
 
  
 
  </ImageOverlay>






      
    );

   
  }


  componentDidMount(){
           

    db.ref('/Usuarios/').on('value', (snapshot) =>{
        var li = []
                  
        snapshot.forEach((child)=>{
         li.push({
                  key: child.key,
                  name:child.val().name,
                  viabilidad:child.val().Viabilidad,
                  cita:child.val().cita
          
        })
      })


   this.setState({list:li})
  
  
  })
 }



}


