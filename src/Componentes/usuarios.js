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
import fondo from '../../assets/fondo5.jpg'; 
import {fecha} from './calendario';
import {viabilidad} from './viabilidad';
import {potenciaSistema} from './viabilidad';
import {nombreFire} from '../../fire';


console.log(Math.round(potenciaSistema))

export class Usuarios extends React.Component {

 
    constructor(props) {
        super(props)
        this.state = {
          list: [],
         
          nombre:''
                   
        }
        
      }


      goToChat(key,name) {
        global.idCliente = key;
        this.props.navigation.navigate('Chat');
      }

     cita(key) {

    
        
        db.ref('/Usuarios/' + key).update({

          cita: fecha,
          nombre_instalador: this.state.nombre

           });
    
     
     }

     insta(key) {

    
        
      db.ref('/Usuarios/' + key).update({

        fechaInstalacion: fecha

         });
    
   }


    potenciaContratada(key) {

              
      db.ref('/Usuarios/' + key).update({

        potenciaContratada: potenciaSistema

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


      chat(key) {
        db.ref('/Usuarios/' + key).update({

          Viabilidad: viabilidad
        });
        
      }
 

  render() {

 

    //console.log("nombre USUARIOS", nombreFire)




    return (


   <ImageOverlay 

       source={fondo}
       height={hp('100%')}  
       overlayAlpha={0}             
       >
          <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0)', width:wp('100%'), height:hp('100%'), marginTop:hp('0%')}}>

          
                    <View style={{flex:1.5}}>
                          <Text style={{ marginTop:  hp('3%'), color:'white', fontSize:hp('2.3%')}}>{nombreFire}, bienvenido/a a su sesión</Text> 
                   </View>    

                   <View style={{marginTop:  hp('0%'), flex: 1, width:wp('100%'), height:wp('10%'), alignItems:'center', marginBottom: hp('1%')
                          
                         }}> 

                                  <Image 

                                        source={logo} style={{
                  
                                          aspectRatio:2.8,
                                          height: hp('5%'),
                                          marginBottom: hp('0%'),
                                          marginTop:  hp('0%'),
                                          borderRadius: 10
                                         
                                                                      
                                        }}
                                  >
                                    
                                  </Image>
                        
                      </View> 
                      
                      <View style={{flex:15, width:wp('100%'), height:hp('100%'), alignItems:'center',  marginTop:  hp('1%'),
                          
                         }}> 
                      
                            
                        <FlatList style={{height:hp('100%'), marginBottom: hp('15%') }}
                        
                                  data={this.state.list} 
                                  renderItem={({ item }) => 
                          
                        <Card style={{textAlign: 'center', alignItems:'center', backgroundColor:"white", borderRadius:10, height:hp('45%'),width:wp('84%'), flex:1}}> 
                       
                                                     
                            <View style={{flexDirection:'row', flex:0.8, height:hp('1%'), marginTop:hp('0%')}}>
                            
                                <View style={{ backgroundColor:'orange', flex:1.5, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                                    <Text style={{fontWeight:'bold', fontSize:hp('2%'),  textAlign:'center'}}>{item.name}</Text> 
                                </View>    
                               

                                <View style={{backgroundColor:'#EEEBEB', flex:1.1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                                    <Button  title='Calen' color='black' onPress={() => this.props.navigation.navigate('Calendario')}></Button>
                                </View>
                                
                                <View style={{backgroundColor:'#EEEBEB', flex:1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                                <Button  title='Cita' color='#EA9529' onPress={() => this.cita(item.key)}></Button>
                               </View>


                               <View style={{backgroundColor:'#EEEBEB', flex:1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                               <Button  title='Visit' color='red' onPress={() => this.visita(item.key)}></Button>
                               </View> 

                               <View style={{backgroundColor:'#EEEBEB', flex:1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                                <Button  title='Inst' color='#29EA72' onPress={() => this.insta(item.key)}></Button>
                               </View>

                               

                            </View>


                          {/*Viabilidad*/}
                         
                           <View style={{backgroundColor:'#EEEBEB', flexDirection:'row', flex:0.8, height:'2%', marginTop:'0%'}}>
                           
                              <View style={{flex:1, borderColor:'grey', borderWidth:1}}>
                         
                                <Button  title='Potencia' color='green' onPress={() => this.props.navigation.navigate('Potencia Kw')}> 
                                  
                                </Button>
                            </View>

                            <View style={{backgroundColor:'#EEEBEB', flex:1, borderColor:'grey', borderWidth:1, borderColor:'grey', borderWidth:1}}>
                         
                                 <Button  title='EnvPoten' color='#29CDEA' onPress={() => this.potenciaContratada(item.key)}> 
                                  
                                </Button>
                            </View>
                            
                              
                            
                           {/*  <View style={{backgroundColor:'#EEEBEB', flex:1, borderColor:'grey', borderWidth:1}}>
                                    <Button  title='Eval' color='grey' onPress={() => this.evaluando(item.key)}> 
                                      
                                    </Button>
                            </View> */}
                            <View style={{backgroundColor:'#EEEBEB', flex:1, borderColor:'grey', borderWidth:1}}>
                         
                                <Button  title='Chat' color='#1E3EDE' onPress={() => this.goToChat(item.key)}></Button>
                                                       
                           </View>
                            
                            
                      </View>


                      
                      {/*Resultados*/}
                     <View style={{height:hp('0%'), width:wp('100%'), marginTop:hp('0%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center', alignItems:'center', borderColor:'grey', borderTopWidth:1}}> 
                         <Text>
                              <Text style={{fontWeight:'bold', fontSize:hp('1.5%')}}>Fecha cita evaluación:</Text> 
                              <Text style={{fontSize:hp('1.5%')}}> {item.cita} </Text> 
                         </Text> 
                     </View>


                     <View style={{height:hp('0.5%'), width:wp('100%'), marginTop:hp('0%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center',alignItems:'center', borderColor:'grey', borderWidth:1}}> 
                          <Text>
                              <Text style={{fontWeight:'bold', fontSize:hp('1.5%')}}>Estado visita: </Text> 
                              <Text style={{ fontSize:hp('1.5%'), backgroundColor:'#28E10B'}}> {item.visita} </Text> 
                         </Text> 
                     </View>


                     <View style={{height:hp('0.5%'), width:wp('100%'), marginTop:hp('0%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center', alignItems:'center', borderColor:'grey', borderWidth:1}}>  
                       
                        <Text>
                              <Text style={{fontWeight:'bold', fontSize:hp('1.5%')}}>Fecha Instalación: </Text> 
                              <Text style={{ fontSize:hp('1.5%')}}> {item.fechaInstalacion} </Text> 
                        </Text> 
                     </View>


                     
                     
                    <View style={{height:hp('0.5%'), width:wp('100%'), marginTop:hp('0%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center', alignItems:'center', borderColor:'grey', borderWidth:1}}> 
                      
                     <Text>
                         <Text style={{fontWeight:'bold', fontSize:hp('1.5%')}}>Potencia Sistema:</Text> 
                         <Text style={{ fontSize:hp('1.5%')}}> {item.CalculoPotenciaSistema} </Text> 
                     </Text> 

                    </View>

                    <View style={{height:hp('0.5%'), width:wp('100%'), marginTop:hp('0%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center', alignItems:'center', borderColor:'grey', borderWidth:1}}> 
                      
                     <Text>
                         <Text style={{fontWeight:'bold', fontSize:hp('1.5%')}}>Cálculo del sistema:</Text> 
                         <Text style={{ fontSize:hp('1.5%')}}> {item.Sistema} </Text> 
                     </Text> 

                    </View>

                    <View style={{height:hp('0.5%'), width:wp('100%'), marginTop:hp('0%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center',alignItems:'center', borderColor:'grey', borderWidth:1}}> 
                      
                        <Text>
                            <Text style={{fontWeight:'bold', fontSize:hp('1.5%')}}>Potencia elegida por instalador:</Text> 
                            <Text style={{ fontSize:hp('1.5%')}}> {item.potenciaContratada} </Text> 
                        </Text> 

                     </View>


                    <View style={{height:hp('3%'), width:wp('100%'), marginTop:hp('1%'), marginBottom:hp('2%'), flex:0.7,alignItems:'center'}}> 
                      
                     <Text>
                         <Text style={{marginTop:hp('2%'), fontWeight:'bold', fontSize:hp('1.5%')}}>Comentarios cliente:</Text> 
                         <Text style={{ height:hp('0.5%'),fontSize:hp('1.5%')}}> {item.comentarios} </Text> 
                     </Text> 

                    </View><View style={{height:hp('0.5%'), width:wp('100%'), marginTop:hp('0%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center', alignItems:'center', borderColor:'grey', borderWidth:1}}> 
                      
                      <Text>
                          <Text style={{fontWeight:'bold', fontSize:hp('1.5%')}}>Rating cliente:</Text> 
                          <Text style={{ fontSize:hp('1.5%')}}> {item.rating} </Text> 
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
                  fechaInstalacion:child.val().fechaInstalacion,
                  rating:child.val().rating,
                  comentarios:child.val().comentarios,
                  CalculoPotenciaSistema:child.val().CalculoPotenciaSistema.toFixed(3),
                  Sistema:child.val().Sistema,
                  potenciaContratada:child.val().potenciaContratada

          
        })
      })


   this.setState({list:li})
  
  
  })
 }



}


