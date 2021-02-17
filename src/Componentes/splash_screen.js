import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo2.jpg'; 
import logo from '../../assets/logo_blanco.png'; 
import Fire, {db} from '../../fire';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var screen


export class SplashScreen extends React.Component {

  state = {

    name: '',
    codigo_instalador:'',
    enabled:true,
    opacity:0
   
  }

 

 render() {

  var name = this.state.name
  
  if (name){
    
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

              
             
                <View  style={{opacity:this.state.opacity, alignItems:'center', flex:0.3,  justifyContent:'center', marginBottom:hp('20%')}}>
                      <TouchableOpacity 

                            disabled={this.state.enabled} 
                                                                         
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

      this.setState({ enabled: false, opacity:1})

      const ref = db.ref('/Instaladores/' +  Fire.getUid());

      this.listener = ref.on("value", snapshot => {

      this.setState({ name: snapshot.child("name").val() || ''  
    
      }) 
    

    
      }

          
    
      )


    }

}


