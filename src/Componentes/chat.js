import * as React from 'react';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import Fire, {db} from '../../fire';
import { StyleSheet, View, Button, ActivityIndicator, Text} from 'react-native';
//import { IconButton } from 'react-native-paper';
import {nombre} from './pantalla_inicial';
import {name} from '../../fire';




var nombreChat, nombreCliente


data = () => db.ref('/Instaladores/Instalador1/').on('value', (snapshot) => {
  
  nombreChat =  snapshot.child("name").val()
 

});

//Nuevo código
data2 = () => db.ref('/Usuarios/' +  Fire.getUid()).on('value', (snapshot) => {
  
  nombreCliente =  snapshot.child("name").val()
  
});


export class Chat extends React.Component {


state = {

    messages: [],
    nombre:nombreChat,
    list: [],
    //Nuevo código
    nombreCliente: nombreCliente
    
};


  render() {
    data()
    //Nuevo código
    data2()
   
    return (
     
    
   
     
    <View style={styles.container}>	
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => Fire.sendMessage(message)}
         // renderBubble = {this.renderBubble.bind(this) }
          //renderSend={renderSend}
          renderBubble={renderBubble}
          renderLoading={renderLoading}
          showUserAvatar
          renderAvatarOnTop={true}
          alwaysShowSend
          scrollToBottom
          showAvatarForEveryMessage = {true}
          renderUsernameOnMessage  = {true}
          placeholder={"Chatea aquí " + nombreChat}
          user={{
            _id: Fire.getUid(),
            name: nombreChat,
            avatar: 'https://firebasestorage.googleapis.com/v0/b/solfium.appspot.com/o/icono2.png?alt=media&token=b0b5e696-f8ce-47e0-b53f-4675af3222f0'
            //avatar:require('../../assets/icono2.png')
           
           
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

// Later on in your styles..
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





function renderSend(props) {
  return (
    <Send {...props}>
      <Send {...props} wrapperStyle={{ textStyle: { color: 'red' } }} > </Send>
    </Send>
  );
}


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