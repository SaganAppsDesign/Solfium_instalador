import React from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  LogBox,
  View,
  Image,ScrollView, SafeAreaView

} from 'react-native';

import { Card, CardItem, Text, Body, Icon, Right } from 'native-base';
import ImageOverlay from "react-native-image-overlay";

import Fire, {db} from '../../fire';
import logo from '../../assets/logo.png'; 
import fondo from '../../assets/tec3.jpg'; 

var {height} = Dimensions.get('screen');

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

  <View style={styles.container}>

   <View>  

   <ImageOverlay 

       source={fondo}
       height={height}
       resizeMode="stretch"
       style={styles.fondo} >
            
     <View>           

            <View style={[styles.box1]}> 

              <Image 

                  source={logo} style={styles.logo}
                >
                
              </Image>
                
            </View>   


           
                    <View style={{flex:10, alignSelf:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0)', width:'85%', height:500, marginTop:'5%'}}>
                      
                    <ScrollView>           
                    <FlatList data={this.state.list} 
                              renderItem={({ item }) => 
                      
                     <Card style={{textAlign: 'center', alignItems:'center', backgroundColor:"white", borderRadius:7, height:250, flex:1}}> 
                       
                            <CardItem  bordered> 
                               <Text style={{fontWeight: 'bold'}}>ID: {item.key}</Text> 
                            </CardItem> 
                            
                            <CardItem bordered> 
                                <Text style={{fontWeight:'bold', fontSize:15}}>Nombre cliente: {item.name}</Text> 
                            </CardItem> 
                         
                         
                            <View style={{flexDirection:'column', flex:1, height:'2%', marginBottom:0}}>
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

                            <CardItem bordered footer style={{ weight: '100',height:'2%', backgroundColor:'yellow', marginTop:'5%', marginBottom:'0%'}}> 
                            <Text style={{fontWeight:'bold', fontSize:15}}>Evaluación Final: {item.viabilidad}</Text> 
                        </CardItem> 
                      </View>

                   
                    </Card> 

                   
                    } />

                         
                    </ScrollView>
                 
                    </View>

          
 
  
      </View>  
  </ImageOverlay>

  </View>  
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
    flex:1, 
    alignSelf:'center', 
    justifyContent:'center', 
    backgroundColor:'black', 
    width:'100%'
    
  },

  scrollView: {
   
    marginHorizontal: 1,
    paddingBottom : 5,
    flex:1,
    height: '100%'
  },

  
    //header
    box1: {
    flex: 1,
    marginTop:'10%',
    
        
    },
    //content
    box2: {
        flex: 4,
        alignItems: 'center'
        
    },
    //footer
    box3: {
        flex: 7,
        alignItems: 'center',
        marginBottom:'5%',
        marginTop:'0%'

        
    },

  logo: {
    
    width: "50%",
    height: "50%",
    marginBottom: "0%",
    marginTop: "10%",
    marginLeft: "60%",
    marginRight: "0%"
    
    
  },

  panel: {
    
    width: 400,
    height: 400,
    marginBottom: "90%",
    marginTop: "2%",
    marginLeft: "0%",
    marginRight: "0%"
    
    
  },

  boton: {
    
     
     height: 40, 
     width:'40%',
     marginBottom: "50%", 
     marginTop: "3%", 
     marginLeft: '60%', 
     marginRight: '1%',
     alignItems: "center",
     padding: 0, 
     backgroundColor: 'rgba(255,255,255,0)'
    
    
    
  },
  boton2: {
    
     
    height: 40, 
    width:'40%',
    marginBottom: "50%", 
    marginTop: "3%", 
    marginLeft: '5%', 
    marginRight: '1%',
    alignItems: "center",
    padding: 0, 
    backgroundColor: 'rgba(255,255,0,0)'
   
   
   
 },

 boton3: {
    
     
  height: 40, 
  width:'40%',
  marginBottom: "100%", 
  marginLeft: "75%", 
  marginTop: "3%", 
  marginRight: '1%',
  alignItems: "center",
  padding: 0, 
  backgroundColor: 'rgba(0,255,0,0)'
 
 
 
},


  texto: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 15,
    marginBottom: 20,
    fontWeight: 'bold'
    
    
  },
 
  fondo: {
    width: '100%'
    
    
  },
  btnContainer3: {
   
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2196F3',
    padding: 5,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:310,
    height:180,
    marginBottom:2, marginTop:0
  },

  btnContainer4: {
   
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2196F3',
    padding: 1,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:'90%',
    height:'15%',
    marginBottom:5, 
    marginTop:0,
    margin:'5%'
  }
  

});
 

