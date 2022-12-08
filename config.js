import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC1ST4NWNhJIxQpypS8hCp1Y7aGCuVmgnc",
    authDomain: "bibliotecamaneiradocachorrao.firebaseapp.com",
    projectId: "bibliotecamaneiradocachorrao",
    storageBucket: "bibliotecamaneiradocachorrao.appspot.com",
    messagingSenderId: "642243302770",
    appId: "1:642243302770:web:95e9f56e98c28e718ff9eb"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()
  