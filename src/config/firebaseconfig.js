import firebase from "firebase"
import "firebase/storage" 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpsdlMjbpd5qCKJ0FVB3i3JLUpzcIdxB0",
    authDomain: "celerus-50a72.firebaseapp.com",
    projectId: "celerus-50a72",
    storageBucket: "celerus-50a72.appspot.com",
    messagingSenderId: "824895438825",
    appId: "1:824895438825:web:ab1bc1e085a5a5da80d578"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default database