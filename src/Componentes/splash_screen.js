import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo2.jpg'; 
import logo from '../../assets/logo_blanco.png'; 
import loading from '../../assets/loader.gif'; 
import Fire, {db} from '../../fire';
import {name} from  '../../fire';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var screen



export class SplashScreen extends React.Component {
/* 
  constructor(props){
    super(props)
    setTimeout(()=>{
      this.props.navigation.replace(screen)

    },2000

    )

  } */

  state = {

    name: '',
   
  }

  
   
  

 render() {

  

  var name = this.state.name


  //console.log("NOMBREEEEE RENDER name: ", name)

  
  if (name){

     //var valor
            
     screen = 'Usuarios'     
         
    } else {

      screen = 'Home'
    }


  return (


    <ImageOverlay 
          source={fondo}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                              
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>  
                                                        
                          
                <View style={{alignItems: 'center', flexDirection:'column',flex:8, width:wp('100%'), height:hp('100%')}}>


                
                { /* LOGO*/}
  
                <View style={{alignItems:'center', justifyContent:'center',flex:4}}>  
                
                <Image 
                  
                  source={logo}
                  style={{aspectRatio:4.5, height:hp('9%'), marginTop:hp('30%')}}
                  
                  >    
                </Image>  
      
               </View> 
                      
                
                <View  style={{opacity:0.5, alignItems:'center', flex:0.3,  justifyContent:'center', marginBottom:hp('20%')}}>
                      <TouchableOpacity 

                            disabled={false} 
                                                                                  
                            onPress={() => this.props.navigation.navigate(screen)}
                              > 
                           
                             
                              <Text
                                    
                                    style={{fontWeight:'bold', fontSize:hp('3%'),  textAlign:'center'}}
                                    
                                    > Entra a panel de USUARIOS   </Text>

                       </TouchableOpacity>
                  </View>
              
       
    </View>
                   
  </View>


    </ImageOverlay> 

  );
}


    componentDidMount() {


     /*  const ref = db.ref('/Instaladores/' +  Fire.getUid());

      this.listener = ref.on("value", snapshot => {

      this.setState({ name: snapshot.child("name").val() || '' }) 
                    
      console.log("NOMBREEEEE DIDMOUNT: ", this.state.name)
      console.log("Fire.getUid(): ", Fire.getUid())
    
    }
    ) */

    const ref = db.ref('/Instaladores/Instalador1/');

    this.listener = ref.on("value", snapshot => {

    this.setState({ name: snapshot.child("name").val() || '' }) 
                  
    //console.log("NOMBREEEEE DIDMOUNT: ", this.state.name)
    //console.log("Fire.getUid(): ", Fire.getUid())
  
  }
  )









    }

}


