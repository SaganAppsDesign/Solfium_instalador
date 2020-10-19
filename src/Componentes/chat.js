import * as React from 'react';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import Fire, {db} from '../../fire';
import { StyleSheet, View, Button, ActivityIndicator, Text} from 'react-native';
//import { IconButton } from 'react-native-paper';
import {nombre} from './pantalla_inicial';




var name, uid, name2


data = () => db.ref('/Instaladores/' +  Fire.getUid()).on('value', (snapshot) => {
  
  name =  snapshot.child("name").val()
 

});

//Nuevo código
data2 = () => db.ref('/Usuarios/' +  Fire.getUid()).on('value', (snapshot) => {
  
  name2 =  snapshot.child("name").val()
  
});


export class Chat extends React.Component {


state = {

    messages: [],
    nombre:nombre,
    list: [],
    //Nuevo código
    name2: name2
    
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
          placeholder={"Chatea aquí " + this.state.nombre}
          user={{
            _id: Fire.getUid(),
            name: name,
            avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png'
           
           
        }}
      />

      <View style={{marginBottom: '5%', marginLeft:'10%',marginRight:'10%', marginTop:'5%'}}>
      <Button title="Menú pricipal" 
              color='orange'
              onPress={() =>  this.props.navigation.navigate('Usuarios')}
            

            />
      </View>
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
  	backgroundColor: '#EEF0ED',
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
          backgroundColor: '#DEE9ED'
        },
        right: {
          // Here is the color change
          backgroundColor: 'red'
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