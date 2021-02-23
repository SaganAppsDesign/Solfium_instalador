import chat from '../../assets/chat.png'
import chat2 from '../../assets/chat2.png'
import React from 'react'
import {
    Image  
  } from 'react-native'
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function ImageChat(envioMensaje) {

      
    if(envioMensaje=='true'){

       
        return(


            <Image 
                    
            source={chat2}
            style={{width:wp('8.8%'), height:hp('5%'),  marginTop:hp('-2%')}}
            
            >    
            </Image>  
        
            )

    } else {

      
        return(

            <Image 
       
            source={chat}
            style={{width:wp('8.8%'), height:hp('5%'),  marginTop:hp('-2%')}}
            
            >    
            </Image>  
        
            )
        
    }
 

}


