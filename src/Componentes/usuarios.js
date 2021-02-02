import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Image,Button, Text

} from 'react-native';

import { Card } from 'native-base';
import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logo from '../../assets/logo.png'; 
import chat from '../../assets/chat.png'; 

import fondo from '../../assets/fondo5.jpg'; 
import {fecha} from './calendario';
import {potenciaSistema} from './viabilidad';
import {nombreFire} from '../../fire';
import {consumoMensual} from './consumo_mensual';
import {codigo_instalador} from './pantalla_inicial'
import Fire, {db} from '../../fire';


export class Usuarios extends React.Component {

 
    constructor(props) {
        super(props)
        this.state = {
          list: [],
          nombre:'',
          nuevoMensaje:false,
          clickVisit:true,
          clickCita:true,
          clickInsta:true,
          name:'',
          codigo_instalador:''
                   
        }
        
      }


      goToChat(key) {
        global.idCliente = key;
        this.props.navigation.navigate('Chat');
      }




      cita(key) {
        if (this.state.clickCita==true){
          db.ref('/Usuarios/' + key).update({
            cita: fecha,
            nombre_instalador: this.state.name
             })
  
    
             this.setState({
               clickCita: false
  
          })
  
        } else{
  
          db.ref('/Usuarios/' + key).update({
     
            cita: "",
            nombre_instalador: this.state.name
   
             })
              this.setState({
              clickCita: true
  
          })
   
        }
        //console.log("this.state.clickCita",this.state.clickCita)
    
       }

       insta(key) {

        if (this.state.clickInsta==true){
       
          this.setState({
  
            clickInsta: false
  
        })
      
        db.ref('/Usuarios/' + key).update({
           fechaInstalacion: fecha
      
           })
      
          } else {
  
            db.ref('/Usuarios/' + key).update({
     
              fechaInstalacion: ""
          
               })
  
               this.setState({
               clickInsta: true
  
            })
    
          }
          
     }
  
   
    potenciaContratada(key) {

              
      db.ref('/Usuarios/' + key).update({

        potenciaContratada: potenciaSistema

        })
    
    }


    visita(key) {

      if (this.state.clickVisit==true){
 
       db.ref('/Usuarios/' + key).update({
   
         visita: "En curso"
   
          })
  
          this.setState({
            clickVisit: false
        })
 
      } else {
   
       db.ref('/Usuarios/' + key).update({
 
         visita: ""
 
          })
 
          this.setState({
          clickVisit: true
 
       })
 
      }  
 
    }

      consumo(key) {
        db.ref('/Usuarios/' + key).update({
          consumoMensual: consumoMensual
          
        })
           
        
      }
    
  
 

  render() {


    //console.log(this.state.list)

    return (


   <ImageOverlay 

       source={fondo}
       height={hp('100%')}  
       overlayAlpha={0}             
       >
          <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0)', width:wp('100%'), height:hp('100%'), marginTop:hp('0%')}}>

          
                    <View style={{flex:1.5}}>
                          <Text style={{ marginTop:  hp('3%'), color:'white', fontSize:hp('2.3%')}}>{this.state.name}, bienvenido/a a su sesión</Text> 
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
                        initialNumToRender={100} 
                        renderItem={({ item }) => {
                         
                                               
                       if (codigo_instalador == item.codigo_instalador) {

                                                      
                          return (       
                            
                           
                         
                        <Card style={{textAlign: 'center', alignItems:'center', backgroundColor:"white", borderRadius:10, height:hp('45%'),width:wp('84%'), flex:1}}> 
                       
                                                     
                            <View style={{flexDirection:'row', flex:0.8, height:hp('1%'), marginTop:hp('0%')}}>
                            
                                <View style={{ backgroundColor:'orange', flex:1.5, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                                    <Text style={{fontWeight:'bold', fontSize:hp('2%'),  textAlign:'center'}}>{item.name}</Text> 
                                </View>    
                               

                                <View style={{backgroundColor:'#ADD6FC', flex:1.1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                                    <Button  title='Calen' color='black' onPress={() => this.props.navigation.navigate('Calendario')}></Button>
                                </View>
                                
                                <View style={{backgroundColor:'#ADD6FC', flex:1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                                <Button  title='Cita' color='black' onPress={() => this.cita(item.key)}></Button>
                               </View>


                               <View style={{width:wp('0.1%') , backgroundColor:'#ADD6FC', flex:1, fontSize:hp('0.2%'), borderColor:'grey', borderWidth:1}}>
                         
                               <Button  title='Visit' color='black' onPress={() => this.visita(item.key)}></Button>
                               </View> 

                               <View style={{backgroundColor:'#ADD6FC', flex:1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                                <Button  title='Inst' color='black' onPress={() => this.insta(item.key)}></Button>
                               </View>

                               

                            </View>


                          {/*PotenciaContratada*/}
                         
                           <View style={{alignItems:'center', backgroundColor:'#EEEBEB', flexDirection:'row', flex:0.8, height:'2%', marginTop:'0%'}}>
                            {/*botón*/}
                              <View style={{backgroundColor:'#F5D3AF',alignItems:'center', textAlign:'center', flex:1, borderWidth:1, width:wp('100%'), height:hp('5%'), alignContent:'center'  }}>
                                                         
                                <TouchableOpacity
                          
                                onPress={() => this.props.navigation.navigate('Potencia Kw')} 
                                                    
                                >
                                                                       
                                      <Text style={{
                                        marginTop:hp('1%'),
                                        color: 'black',
                                        textAlign:'center',
                                        fontWeight:'bold',
                                        fontSize:hp('1.5%'),
                          
                                      }}>Potencia</Text>
                                    
                                </TouchableOpacity>
                                  
                           
                            </View>
                            {/*fin botón*/}

                            {/*botón*/}
                            <View style={{backgroundColor:'#F5D3AF',alignItems:'center', textAlign:'center', flex:1, borderWidth:1, width:wp('100%'), height:hp('5%')  }}>
                                                         
                                                <TouchableOpacity
                                          
                                                onPress={() => this.potenciaContratada(item.key)}
                                                                    
                                                >
                                                                                  
                                                      <Text style={{
                                                        marginTop:hp('0.5%'),
                                                        color: 'black',
                                                        textAlign:'center',
                                                        fontWeight:'bold',
                                                        fontSize:hp('1.5%'),
                                                        width:hp('7%')
                                          
                                                      }}>Envío Potencia</Text>
                                                    
                                                </TouchableOpacity>
                                             
                            </View>
                            {/*fin botón*/}
                          

                            {/*botón*/}
                            <View style={{backgroundColor:'#F5D3AF', alignItems:'center', textAlign:'center', flex:1, borderWidth:1, width:wp('100%'), height:hp('5%')  }}>
                                                         
                                  <TouchableOpacity
                            
                                  onPress={() => this.props.navigation.navigate('Consumo mensual')}
                                                      
                                  >
                                                                    
                                        <Text style={{
                                          marginTop:hp('1.1%'),
                                          color: 'black',
                                          textAlign:'center',
                                          fontWeight:'bold',
                                          fontSize:hp('1.5%'),
                                          width:hp('8%')
                            
                                        }}>Consumo</Text>
                                      
                                  </TouchableOpacity>
                                                      
                            </View>
                            {/*fin botón*/}
                            {/*botón*/}
                            <View style={{backgroundColor:'#F5D3AF',alignItems:'center', textAlign:'center', flex:1, borderWidth:1, width:wp('100%'), height:hp('5%')  }}>
                                                         
                                <TouchableOpacity
                          
                                onPress={() => this.consumo(item.key)}
                                                    
                                >
                                                                  
                                      <Text style={{
                                        marginTop:hp('0.5%'),
                                        color: 'black',
                                        textAlign:'center',
                                        fontWeight:'bold',
                                        fontSize:hp('1.5%'),
                                        width:hp('7%')
                          
                                      }}>Envío Consumo</Text>
                                    
                                </TouchableOpacity>
                                                    
                          </View>
                          {/*fin botón*/}

                          {/*botón*/}
                          <View style={{backgroundColor:'white',  alignItems:'center', textAlign:'center', flex:1, borderWidth:1, width:wp('100%'), height:hp('5%'), alignContent:'center'  }}>
                                                         
                              <TouchableOpacity
                        
                                     onPress={() => this.goToChat(item.key)}
                                                  
                              >
                                <Image 
                                
                                source={chat}
                                style={{aspectRatio:1, height:hp('4.6%'), marginTop:hp('0.1%')}}
                                
                                >    
                                </Image>                           
                                   
                                  
                              </TouchableOpacity>
                                                  
                        </View>
                        {/*fin botón*/}
                           
                            
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

                     <View style={{height:hp('0.5%'), width:wp('100%'), marginTop:hp('0%'), marginBottom:hp('0%'), flex:0.5, justifyContent:'center',alignItems:'center', borderColor:'grey', borderWidth:1}}> 
                      
                        <Text>
                            <Text style={{fontWeight:'bold', fontSize:hp('1.5%')}}>Consumo promedio mensual en kWh:</Text> 
                            <Text style={{ fontSize:hp('1.5%')}}> {item.consumoMensual} </Text> 
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
                    )}}
                                    }
                   
                   />

            
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
                  CalculoPotenciaSistema:child.val().CalculoPotenciaSistema,
                  Sistema:child.val().Sistema,
                  potenciaContratada:child.val().potenciaContratada,
                  consumoMensual:child.val().consumoMensual,
                  codigo_instalador:child.val().codigo_instalador

          
        })
      })


   this.setState({list:li})
  
  
  })

    // Retrieve new posts as they are added to our database
    db.ref('/Chat/').child(global.idCliente + codigo_instalador).on("child_added", function(snapshot) {
      var newMessage = snapshot.val()
      //console.log("Author: " + newMessage.text)
          
    })

    this.setState({nuevoMensaje:true})

    //const ref = db.ref('/Instaladores/' +  codigo_instalador);
    const ref = db.ref('/Instaladores/' +  codigo_instalador);

    this.listener = ref.on("value", snapshot => {

    this.setState({ name: snapshot.child("name").val() || ''  
  
    }) 
    
    //console.log("nuevoMensaje ComponentDidmount: " + this.state.nuevoMensaje)

 
  }
  )



}

}


