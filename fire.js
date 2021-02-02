import firebase from 'firebase'; 
import {codigo_instalador} from './src/Componentes/pantalla_inicial'


console.log("codigo_instaladorxxx" , codigo_instalador)

const firebaseConfig = {
  apiKey: 'AIzaSyCmFh0zidLXHhW9x2o-xVVLMEtNjVueP6g',
  authDomain: 'solfium.firebaseapp.com',
  databaseURL: 'https://solfium.firebaseio.com/',
  projectId: 'solfium',
  storageBucket: 'solfium.appspot.com',
  messagingSenderId: '967493547951',

};

//export var nombreFire

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();

  


class Fire {

  uid = ''
  messagesRef = null

     
  constructor ()  {
 
     
   //Nuevo código
   const ref = db.ref('Instaladores/');
 
   this.listener = ref.on("value",  (snapshot) =>{
         
             
         snapshot.forEach((child)=>{
       
           key = child.key
           nombreFire = snapshot.child("name").val()
           
           //name2 = name.name
               
       
      })
       
        //console.log("NAME FIREBASE", nombreFire)
        //console.log("key", key)

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

   
   this.messagesRef = firebase.database().ref('/Chat/').child(global.idCliente + '-' + codigo_instalador);
    //this.messagesRef = firebase.database().ref('/Chat/').child(global.idCliente + '-Instalador1');

    this.messagesRef.off();

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
      
    }
   

    this.messagesRef.limitToLast(10).on('child_added', onReceive)
    
  }

  sendMessage(message){
      for (let i=0; i < message.length; i++){
          this.messagesRef.push({
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

