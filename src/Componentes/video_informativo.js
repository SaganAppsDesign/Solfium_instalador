import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
//import VideoPlayer from 'react-native-video-controls';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import backBtn from '../../assets/backBtn.png'; 
import YoutubePlayer from "react-native-youtube-iframe";



export class VideoInfo extends React.Component {

 

  render() {
	return (

 

  <View style={styles.container}>	
  
   <View style={{marginTop:'5%', marginBottom:'5%', marginLeft:'0%', marginRight:'0%',  width:'90%', height:'90%', flex:1}}>	
   <YoutubePlayer height={250} videoId={"cCfcoDhIe64"} />
   {/*  <VideoPlayer 
    
    source={require ('../assets/video.mp4')} 
    style={styles.backgroundVideo}
    shouldPlay
    navigator={this.props.navigator}
    onBack={() => this.props.navigation.navigate('Ingresar Consumo')}
    //toggleResizeModeOnFullscreen 
    />
     */}
    
    {/* 
    < Video
    source={require ('../assets/video.mp4')}
    shouldPlay
    useNativeControls 
    
    style={styles.backgroundVideo} 
    /> */}
    </View>
{/* header */}              
           {/*Botones*/}     
           <View style={{alignItems:'center', flex:0.6,  justifyContent:'center', flexDirection:'row', marginBottom:hp('3%'),marginTop:hp('0%')}}>  
                         

                          <View  style={{ alignItems:'center', flex:1,  justifyContent:'center'}}>
                             <TouchableOpacity 
                                                                                          
                                onPress={() => this.props.navigation.navigate("Atrás")}
                               > 
                                                     
                               <Image 
                                
                                source={backBtn}
                                style={{aspectRatio:1, height:hp('6%')}}
                                
                                >    
                                </Image>

                                      
                                              
                            </TouchableOpacity> 
        
                         </View>

                        
        
                               
        
                        </View>
                      
                      
          {/* FIN header */}     
 

   </View>	



   )}
}

// Later on in your styles..
const styles = StyleSheet.create({
  

  container:{ 
  	flex: 1,
  	justifyContent: "center",
  	backgroundColor: '#000',
    marginTop: "0%",
    alignItems:'center'},

  backgroundVideo: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    bottom: '0%',
    right: '0%',
    width:'100%'
   
  },
  
    
    
    
  
});


