import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import tec2 from '../../assets/tec3.jpg'; 
import ImageOverlay from "react-native-image-overlay";
import Icon from 'react-native-vector-icons/FontAwesome';




var {height} = Dimensions.get('window');

export function InfoResultInsta({navigation }) {

  return (  





       
       <ImageOverlay 
         source={tec2}
         height={height}>

        <View>
          <View  style={{marginTop: '0%', marginBottom: '1%'}}>
                   
                        
              <Text style={{color: '#000',
                      backgroundColor: 'white',
                      fontSize: 15,
                      marginHorizontal: 15,
                      textAlign: 'center',
                      marginTop: 0,
                      marginBottom: 5,
                      fontWeight: 'bold',
                      padding: 10,
                      borderRadius:0}}>Evaluación posibilidad instalación:


               </Text>

          </View>
                   
          
        <View>
             <TouchableOpacity
              onPress={() => navigation.navigate('Viabilidad total')}
              >
              <View
                style={styles.btnContainer1}>
                <Icon
                  name="thumbs-up"
                  size={50}
                  color="black"
                  style={styles.btnIcon}/>
    
                <Text style={styles.btnText}>Instalador. 100% de la oferta</Text>
              </View>
            </TouchableOpacity>
         



             <TouchableOpacity
              onPress={() => navigation.navigate('Viabilidad a la baja')}
              >
              <View
                style={styles.btnContainer2}>
                <Icon
                  name="thumbs-up"
                  size={50}
                  color="black"
                  style={styles.btnIcon}/>
    
                <Text style={styles.btnText}>Instalador. Oferta a la baja</Text>
              </View>
            </TouchableOpacity>
       

      
             <TouchableOpacity
              onPress={() => navigation.navigate('Viabilidad 0')}
              >
              <View
                style={styles.btnContainer3}>
                <Icon
                  name="ban"
                  size={50}
                  color="black"
                  style={styles.btnIcon}/>
    
                <Text style={styles.btnText}>Instalador. No es posible la instalación</Text>
              </View>
            </TouchableOpacity>
        </View>
        </View>
        </ImageOverlay>
        
   
  );
}



const styles = StyleSheet.create({

  fondo: {
    width: '100%'
        
  },
  btnContainer1: {
    
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'green',
    padding: 15,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:300,
    height:100,
    marginBottom:10, marginTop:30

  
  },

   btnContainer2: {
    
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'orange',
    padding: 15,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:300,
    height:100,
    marginBottom:10, marginTop:10

  
  },


   btnContainer3: {
   
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'red',
    padding: 20,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:300,
    height:110,
    marginBottom:100, marginTop:10

  
  },
  btnIcon: {
    height: 50,
    width: 50,
  },
  btnText: {
    fontSize: 18,
    color: '#FAFAFA',
    marginLeft: 0,
    marginTop: 5,
    textAlign:'center',
    fontWeight: 'bold'

  }

});