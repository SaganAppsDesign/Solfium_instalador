import * as React from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import Fire, {db} from '../../fire';
import { StyleSheet, View, ActivityIndicator,  Keyboard , TouchableOpacity, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var nombreChat, nombreCliente, envioMensaje
Keyboard.dismiss();

send = () => db.ref('Usuarios/' +  global.idCliente).update({
        
  envioMensaje:  "false"
        
  })

data = () => db.ref('/Instaladores/' + Fire.getUid()).on('value', (snapshot) => {
  
  nombreChat =  snapshot.child("name").val()
 

})

data2 = () => db.ref('/Usuarios/' +  global.idCliente).on('value', (snapshot) => {
  
  nombreCliente =  snapshot.child("name").val()
  envioMensaje =  snapshot.child("envioMensaje").val()
  console.log("envioMensaje dentro de data2 en CHAT", envioMensaje)
  
}

)


export class Chat extends React.Component {


state = {

    messages: [],
    nombre:nombreChat,
    list: [],
    nombreCliente: nombreCliente,
    name:'',
    id:'',
  
    
}

  render() {

 
    data()
    data2()
   
    return (

      
     
 
    <View style={styles.container}>	
        <GiftedChat
          messages={this.state.messages}
          onSend={  (message) => {Fire.sendMessage(message);send()}   }
          renderBubble={renderBubble}
          renderLoading={renderLoading}
          showUserAvatar
          renderAvatarOnTop={true}
          alwaysShowSend
          scrollToBottom
          isTyping = {true}
          //keyboardShouldPersistTaps={"never"}
          showAvatarForEveryMessage = {true}
          renderUsernameOnMessage  = {true}
          placeholder={"Chatea aquí " + nombreChat}
          user={{
            _id: Fire.getUid(),
            name: nombreChat,
            avatar: 'https://firebasestorage.googleapis.com/v0/b/solfium.appspot.com/o/icono2.png?alt=media&token=b0b5e696-f8ce-47e0-b53f-4675af3222f0'
             
           
        }}
      />
             
    </View>
    
   
)

}

componentDidMount() {

 


    Fire.loadMessages((message) => {
        
        this.setState(previousState => {

          return {

            messages: GiftedChat.append(previousState.messages, message)
            
            
          }
       

        })
      
    }

    
       
    )

    
  

}


componentWillUnmount() {
  Fire.closeChat();
}


}


const styles = StyleSheet.create({
  

  container:{ 
  	flex: 1,
  	justifyContent: "center",
  	backgroundColor: '#EBEDEF',
    marginTop: "0%"},
    
   sendingContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
 
  
});


function renderBubble(props) {
  return (
    // Step 3: return the component
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          // Here is the color change
          backgroundColor: '#fff'
        },
        right: {
          // Here is the color change
          backgroundColor: '#DCF8C6'
        }
      }}
      textStyle={{
        left: {
          color: '#000'
        },
        right: {
          color: '#000'
        }
      }}
    />
  );
}

function renderLoading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#6646ee' />
    </View>
  );
}