import * as React from 'react';
import { GiftedChat, Bubble, Send, MessageText } from 'react-native-gifted-chat';
import Fire from '../../fire';
import { StyleSheet, Text, View, Image, TouchableOpacity, LogBox, Button, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton } from 'react-native-paper';

export class Chat extends React.Component {


state = {

    messages: []
    
};


  render() {
   

    const { name } = this.props.route.params;

   
    return (
     
     
    <View style={styles.container}>
   
     
    <View style={styles.container}>	
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => Fire.sendMessage(message)}
         // renderBubble = {this.renderBubble.bind(this) }
          renderSend={renderSend}
          renderBubble={renderBubble}
          renderLoading={renderLoading}
          showUserAvatar
          alwaysShowSend
          scrollToBottom
          showAvatarForEveryMessage = {true}
          renderUsernameOnMessage  = {true}
          placeholder={"Chatea aquí " + name}
          user={{
            _id: Fire.getUid(),
            name: name,
           
        }}
      />

      <View style={{marginBottom: '5%', marginLeft:'10%',marginRight:'10%', marginTop:'5%'}}>
      <Button title="  Establecer cita con cliente   " 
              onPress={() =>  this.props.navigation.navigate('Próxima visita')}
              icon={
                     <Icon
                       name="wrench"
                       size={25}
                       color="black"
                     />
                   }


            />
      </View>
    </View>

    </View>

    
)

}

componentDidMount() {

  LogBox.ignoreLogs(["Setting a timer"]);
  
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
  	backgroundColor: '#fff',
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
      <View style={styles.sendingContainer}>
        <IconButton icon='send-circle' size={32} color='#2296F3' />
      </View>
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