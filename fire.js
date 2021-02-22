import firebase from 'firebase'; 
import {nombre_min} from './src/Componentes/pantalla_inicial'


const firebaseConfig = {
  apiKey: 'AIzaSyCmFh0zidLXHhW9x2o-xVVLMEtNjVueP6g',
  authDomain: 'solfium.firebaseapp.com',
  databaseURL: 'https://solfium.firebaseio.com/',
  projectId: 'solfium',
  storageBucket: 'solfium.appspot.com',
  messagingSenderId: '967493547951',

};



const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();

  


class Fire {

  uid = ''
  messagesRef = null

     
  constructor ()  {

   const ref = db.ref('Instaladores/');
 
   this.listener = ref.on("value",  (snapshot) =>{
         
             
         snapshot.forEach((child)=>{
       
           key = child.key
           nombreFire = snapshot.child("name").val()
               
       
      })
       
     })

      
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    firebase.auth().onAuthStateChanged((user) => {

        if (user){
          this.setUid(user.uid)
          uid = user.uid
                      
        } else {

          firebase.auth().signInAnonymously().catch((error) => {

            alert(error.message)
          }
          )

        }

    }
           
    )
   
  }


  setUid(value){
      this.uid = value;

  }

  getUid(){

    return this.uid;
  }

  loadMessages(callback){

   
   this.messagesRef = firebase.database().ref('/Chat/').child(global.idCliente + '-' + nombre_min);

    this.messagesRef.off()

    const onReceive = (data) => {
      
      const message = data.val()
   
      callback({
          _id:  data.key,
          text: message.text,
          createdAt: new Date(message.createdAt),
          user: {
              _id: message.user._id,
              name: message.user.name,
              avatar:message.user.avatar
                                         
          }
          
      })
      //console.log( 'messages en fire', data.key)
      //console.log( 'message.user.name', message.user.name)
    }
   
   
    this.messagesRef.limitToLast(10).on('child_added', onReceive)
    
  }

  sendMessage(message){
      for (let i=0; i < message.length; i++){
          this.messagesRef.push ({
            text: message[i].text,
            user: message[i].user,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
          })
      }
  }

  closeChat(){
    if (this.messagesRef){

      this.messagesRef.off()
    }
  }


}

export default new Fire()

