import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../../assets/fondo2.jpg'; 
import logo from '../../assets/logo_blanco.png'; 
import loading from '../../assets/loader.gif'; 


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export class SplashScreen extends React.Component {

  constructor(props){
    super(props)
    setTimeout(()=>{
      this.props.navigation.replace('Home')

    },2000

    )

  }




  state = {

    potencia: '',
   
  }
   


  
siguiente = () =>  {
    
    
      this.props.navigation.navigate('Home')}
  


 render() {


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
                  style={{aspectRatio:4.5, width:wp('100%'), height:hp('9%'), marginTop:hp('30%')}}
                  
                  >    
                </Image>  
      
               </View> 
                      
                <View style={{ marginTop: hp('0%'), alignItems: 'center', flex:2}}>
                        <Image
                            style={{aspectRatio:1, width:wp('30%'), height:hp('12%'),marginTop: '0%'}}
                            source={loading}
                            />
                </View>
              
       
    </View>
                
                 



          
          
        

       
       </View>


    </ImageOverlay> 

  );
}



}


const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    height:'100%',
        
  },

  logo: {
    
    width: "20%",
    height: "50%",
    marginBottom: "10%",
    marginTop: "2%",
    marginLeft: "59%",
    marginRight: "0%"
    
    
  },

  boton: {
        
     height: '55%', 
     width:'100%',
     borderRadius:20,
     fontWeight:'bold',
     fontSize:15,
     color: 'white', 
     marginBottom: "0%", 
     marginTop: "0%", 
     marginLeft: "0%", 
     marginRight: "0%",
     alignItems: "center",
     paddingLeft:40, 
     paddingRight:40,
     backgroundColor: '#5DCB31',
     textAlignVertical:'center'
    
    
  },

  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },



 



  

});