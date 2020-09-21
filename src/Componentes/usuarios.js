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
import logo from '../../assets/logo.png'; 
import Fire, {db} from '../../fire';
import fondo from '../../assets/fondo.jpg'; 
import {fecha} from './calendario';
import {viabilidad} from './viabilidad';
import {nombre} from './pantalla_inicial';


//year = date.slice(0,4)
/*var month = date.slice(5, 7)
var day = date.slice(8,10)
var hour = date.slice(11,16) */

//var fechaFormato = day + '-'+ month + '-' + year + ' ' + hour + 'h' 


//console.log('fechaFormato: ' + typeof(fecha))


export class Usuarios extends React.Component {

 
    constructor(props) {
        super(props)
        this.state = {
          list: [],
          fecha:fecha,
          nombre:nombre
                   
        }
        
      }

     cita(key) {

    
        
        db.ref('/Usuarios/' + key).update({

          cita: this.state.fecha,
          nombre_instalador: this.state.nombre

           });
    
     
     }

     insta(key) {

    
        
      db.ref('/Usuarios/' + key).update({

        fechaInstalacion: fecha

         });
  
   
   }

     visita(key) {

    
        
      db.ref('/Usuarios/' + key).update({

        visita: "En curso"

         });
  
   
   }

      
      
      evaluando(key) {
        db.ref('/Usuarios/' + key).update({
          Viabilidad: 'evaluando'
          
        });
           
        
      }
    
    
      viabilidad(key) {
        db.ref('/Usuarios/' + key).update({

          Viabilidad: viabilidad
        });

        
      }
 

  render() {



   // console.log(name)




    return (


   <ImageOverlay 

       source={fondo}
       height={hp('100%')}  
       overlayAlpha={0}             
       >
          <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0)', width:wp('100%'), height:hp('100%'), marginTop:hp('0%')}}>

                        <View style={{flex: 1, width:wp('100%'), height:wp('10%'), alignItems:'center', marginBottom: hp('1%')
                          
                         }}> 

                                  <Image 

                                        source={logo} style={{
                  
                                          width: wp('50%'),
                                          height: hp('10%'),
                                          marginBottom: hp('0%'),
                                          marginTop:  hp('1%'),
                                         
                                                                      
                                        }}
                                  >
                                    
                                  </Image>
                        
                      </View> 
                      
                      <View style={{flex:10, width:wp('100%'), height:hp('100%'), alignItems:'center',  marginTop:  hp('2%'),
                          
                         }}> 
                      
                            
                        <FlatList style={{height:hp('100%'), marginBottom: hp('5%') }}
                        
                                  data={this.state.list} 
                                  renderItem={({ item }) => 
                          
                        <Card style={{textAlign: 'center', alignItems:'center', backgroundColor:"white", borderRadius:10, height:hp('30%'),width:wp('80%'), flex:1}}> 
                       
                                                     
                            <View style={{flexDirection:'row', flex:0.5, height:hp('1%'), marginTop:hp('1%')}}>
                            
                                <View style={{flex:2}}>
                                    <Text style={{fontWeight:'bold', fontSize:hp('3%'),  textAlign:'center'}}>{item.name}</Text> 
                                </View>    
                               

                                <View style={{flex:1, fontSize:hp('0.5%')}}>
                         
                                    <Button  title='Cal' color='#A0E1F7' onPress={() => this.props.navigation.navigate('Calendario')}></Button>
                                </View>
                                
                                <View style={{flex:1, fontSize:hp('0.5%')}}>
                         
                                <Button  title='Cita' color='#EA9529' onPress={() => this.cita(item.key)}></Button>
                               </View>
                               <View style={{flex:1, fontSize:hp('0.5%')}}>
                         
                               <Button  title='Visit' color='#ADEA29' onPress={() => this.visita(item.key)}></Button>
                               </View> 

                               <View style={{flex:1, fontSize:hp('0.5%')}}>
                         
                                <Button  title='Inst' color='#29EA72' onPress={() => this.insta(item.key)}></Button>
                               </View>

                               

                            </View>


                          {/*Viabilidad*/}
                         
                           <View style={{flexDirection:'row', flex:0.5, height:'2%', marginTop:'3%'}}>
                           
                              <View style={{flexDirection:'column', flex:1, height:'2%', marginBottom:0}}>
                         
                                <Button  title='Viab' color='green' onPress={() => this.props.navigation.navigate('Viabilidad')}> 
                                  
                                </Button>
                            </View>

                            <View style={{flexDirection:'column', flex:1, height:'2%', marginBottom:0}}>
                         
                                <Button  title='Env Viab' color='#29CDEA' onPress={() => this.viabilidad(item.key)}> 
                                  
                                </Button>
                            </View>
                            
                              
                            
                            <View style={{flexDirection:'column', flex:1, height:'2%', marginBottom:0}}>
                                <Button  title='Eval' color='grey' onPress={() => this.evaluando(item.key)}> 
                                  
                                </Button>
                            </View>
                            <View style={{flex:1}}>
                         
                            <Button  title='chat' color='#1E3EDE' onPress={() => this.props.navigation.navigate('Chat')}></Button>
                                                       
                          </View>
                            
                            
                      </View>


                      

                     <View style={{height:hp('0%'), width:wp('70%'), marginTop:hp('1.5%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center', alignItems:'flex-start'}}> 
                         <Text>
                              <Text style={{fontWeight:'bold', fontSize:hp('2%')}}>Fecha cita:</Text> 
                              <Text style={{fontWeight:'', fontSize:hp('2%')}}> {item.cita} </Text> 
                         </Text> 
                     </View>


                     <View style={{height:hp('0.5%'), width:wp('70%'), marginTop:hp('0.5%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center', alignItems:'flex-start'}}> 
                          <Text>
                              <Text style={{fontWeight:'bold', fontSize:hp('2%')}}>Estado visita: </Text> 
                              <Text style={{fontWeight:'', fontSize:hp('2%'), backgroundColor:'#28E10B'}}> {item.visita} </Text> 
                         </Text> 
                     </View>


                     <View style={{height:hp('0.5%'), width:wp('70%'), marginTop:hp('0.5%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center', alignItems:'flex-start'}}>  
                       
                        <Text>
                              <Text style={{fontWeight:'bold', fontSize:hp('2%')}}>Fecha Instalación: </Text> 
                              <Text style={{fontWeight:'', fontSize:hp('2%')}}> {item.fechaInstalacion} </Text> 
                        </Text> 
                     </View>


                     <View style={{height:hp('0.5%'), width:wp('70%'), marginTop:hp('0.5%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center', alignItems:'flex-start'}}> 
                      
                        <Text>
                            <Text style={{fontWeight:'bold', fontSize:hp('2%')}}>Viabilidad:</Text> 
                            <Text style={{fontWeight:'', fontSize:hp('2%')}}> {item.viabilidad} </Text> 
                        </Text> 



                     </View>
                      
                   
                    </Card> 

                   
                    } />

            
                    </View>
                 
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
                  cita:child.val().cita,
                  visita:child.val().visita,
                  fechaInstalacion:child.val().fechaInstalacion

          
        })
      })


   this.setState({list:li, fecha:fecha})
  
  
  })
 }



}


