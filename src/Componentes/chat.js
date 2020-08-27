import React from 'react';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import Fire from '../../fire';
import { StyleSheet, Text, View, Image, TouchableOpacity, LogBox} from 'react-native';
import { IconButton } from 'react-native-paper';



export class Chat extends React.Component {

state = {

    messages: []
    
};



  render() {
    const { name } = this.props.route.params;
    //console.warn(name)
    return (
     
    <View style={styles.container}>	
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => Fire.sendMessage(message)}
          renderSend={renderSend}
          user={{
            _id: Fire.getUid(),
            name: name,
        }}
      />
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
    marginTop: "-5%"},
         
    sendingContainer: {
      justifyContent: 'center',
      alignItems: 'center'
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
