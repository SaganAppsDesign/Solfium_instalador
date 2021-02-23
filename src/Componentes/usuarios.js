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
import fondo from '../../assets/fondo5.jpg'; 
import {fecha} from './cita';
import {potenciaSistema} from './viabilidad';
import {consumoMensual} from './consumo_mensual';
import Fire, {db} from '../../fire';
import ImageChat from './imageChat'
import { GiftedChat } from 'react-native-gifted-chat';


//var backgroundcolor
var mensajes

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
          codigo_instalador:'',
          messages: [],
          envioMensaje:false,
          backgroundcolor:'white'
                   
        }
        
      }

      

     

      goToChat(key) {
        global.idCliente = key;
        this.props.navigation.navigate('Chat')
        //this.setState({backgroundcolor:"white"})
        db.ref('Usuarios/' +  global.idCliente).update({
        
          envioMensaje:  "false"
                
          })
        
        
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
    
       }

    insta(key){

    this.props.navigation.navigate('Fecha Instalacion', {
      key : key
      
    })
    
    console.log("key dentro de insta funcion usuario",key)

  }

    cita(key){

      this.props.navigation.navigate('Cita', {
        key : key
        
      })
      
      console.log("key dentro de cita funcion usuario",key)

    }


    potenciaContratada(key) {

      this.props.navigation.navigate('Potencia Kw', {
        key : key
        
      })

      
    }

    consumo(key) {

      this.props.navigation.navigate('Consumo mensual', {
        key : key
        
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

      
    
   

  render() {

    mensajes = this.state.messages
 
    return (


   <ImageOverlay 

       source={fondo}
       height={hp('100%')}  
       overlayAlpha={0}             
       >
          <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0)', width:wp('100%'), height:hp('100%'), marginTop:hp('0%')}}>

          { /* ¿Quieres saber cómo funciona Solfium? Click aquí*/}

                  <View  style={{borderRadius:10, alignItems:'center', flex:0.4, marginTop:hp('1%')}}>
                    <Text 
                        style={{textAlign:'center',  fontSize:hp('1.7%'), width:wp('100%'), height: hp('10%'), 
                                color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('0%'), padding:hp('1%')}} 
                      
                        onPress={() => this.props.navigation.navigate("Video informativo")}>¿Quieres saber cómo funciona Solfium? Click aquí
                        
                    </Text>
                    
                  </View> 
                    <View style={{flex:1.5}}>
                          <Text style={{ marginTop:  hp('3%'), color:'white', fontSize:hp('2.3%')}}>{this.state.name}, bienvenido/a a su sesión</Text> 
                   </View>    

                   <View style={{marginTop:  hp('0%'), flex: 1, width:wp('100%'), height:wp('10%'), alignItems:'center', marginBottom: hp('0%')
                          
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
                        
                                                               
                       if (this.state.name == item.codigo_instalador) 

                                                                                      
                          return (       
                            
                                               
                        <Card style={{textAlign: 'center', alignItems:'center', backgroundColor:"white", borderRadius:10, height:hp('45%'),width:wp('84%'), flex:1}}> 
                       
                                                     
                            <View style={{flexDirection:'row', flex:0.8, height:hp('1%'), marginTop:hp('0%')}}>
                            
                                <View style={{ backgroundColor:'orange', flex:1.5, alignItems:'center', justifyContent:'center', borderColor:'black', borderWidth:1}}>
                                    <Text style={{fontWeight:'bold', fontSize:hp('2%'),  textAlign:'center'}}>{item.name}</Text> 
                                </View>    
                               

                                <View style={{backgroundColor:'#ADD6FC', flex:1.1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                                    <Button  title='Cita' color='black' onPress={() => this.cita(item.key)}></Button>
                                </View>
               

                               <View style={{width:wp('0.1%') , backgroundColor:'#ADD6FC', flex:1, fontSize:hp('0.2%'), borderColor:'grey', borderWidth:1}}>
                         
                               <Button  title='Visit' color='black' onPress={() => this.visita(item.key)}></Button>
                               </View> 

                               <View style={{backgroundColor:'#ADD6FC', flex:1, fontSize:hp('0.5%'), borderColor:'grey', borderWidth:1}}>
                         
                                <Button  title='Instal' color='black' onPress={() => this.insta(item.key)}></Button>
                               </View>

                               

                            </View>


                          {/*PotenciaContratada*/}
                         
                           <View style={{alignItems:'center', backgroundColor:'#EEEBEB', flexDirection:'row', flex:0.8, height:'2%', marginTop:'0%'}}>
                            {/*botón*/}
                              <View style={{backgroundColor:'#F5D3AF',alignItems:'center', textAlign:'center', flex:1, borderWidth:1, width:wp('100%'), height:hp('5%'), alignContent:'center'  }}>
                                                         
                                <TouchableOpacity
                          
                                onPress={() => this.potenciaContratada(item.key) } 
                                                    
                                >
                                                                       
                                      <Text style={{
                                        marginTop:hp('1%'),
                                        color: 'black',
                                        textAlign:'center',
                                        fontWeight:'bold',
                                        fontSize:hp('2%'),
                          
                                      }}>Potencia</Text>
                                    
                                </TouchableOpacity>
                                  
                           
                            </View>
                            {/*fin botón*/}
                         

                            {/*botón*/}
                            <View style={{backgroundColor:'#F5D3AF', alignItems:'center', textAlign:'center', flex:1, borderWidth:1, width:wp('100%'), height:hp('5%')  }}>
                                                         
                                  <TouchableOpacity
                            
                                  onPress={() => this.consumo(item.key)}
                                                      
                                  >
                                                                    
                                        <Text style={{
                                          marginTop:hp('1.1%'),
                                          color: 'black',
                                          textAlign:'center',
                                          fontWeight:'bold',
                                          fontSize:hp('2%'),
                                          width:hp('10%')
                            
                                        }}>Consumo</Text>
                                      
                                  </TouchableOpacity>
                                                      
                            </View>
                            {/*fin botón*/}
                           

                          {/*botón*/}

                          {/*Componente importado*/}   
                        

                          <View style={{backgroundColor:'white',  alignItems:'center', textAlign:'center', flex:0.5, width:wp('100%'), height:hp('5%'), alignContent:'center'  }}>
                                                         
                              <TouchableOpacity
                        
                                  onPress={() => this.goToChat(item.key)}
                                                  
                              >
    
                              
                              <Text style={{alignItems:'center', textAlign:'center', flex:2, width:wp('15%'), height:hp('15%'), alignContent:'center'  }}
                              
                              
                              > {ImageChat(item.envioMensaje)}</Text>
                                
                                 {/*Resultados
                                <Image 
                                

                                onLoad={() => this.chatColor(item.envioMensaje)}
                                
                                source={chat}
                                style={{backgroundColor:backgroundcolor,  aspectRatio:1, height:hp('4.6%'), marginTop:hp('0.1%')}}
                                
                                >    
                                </Image>                           
                                   
                            */}
                              </TouchableOpacity>
                                                  
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
                                    
                   
                   />

            
                    </View>
                 
                    </View> 

       
  </ImageOverlay>
      
    )

   
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
                  codigo_instalador:child.val().codigo_instalador,
                  envioMensaje:child.val().envioMensaje,

          
        })
      })


   this.setState({list:li})
  
  
  })

 

    this.setState({nuevoMensaje:true})


    const ref = db.ref('/Instaladores/' +  Fire.getUid());

    this.listener = ref.on("value", snapshot => {

    this.setState({ name: snapshot.child("name").val() || ''  
  
    }) 
    
  

 
  }
  )

  Fire.loadMessages((message) => {
        
    this.setState(previousState => {

      return {

        messages: GiftedChat.append(previousState.messages, message)

      
        
        
      }
   

    })

  
  
}
   
)



}

}


