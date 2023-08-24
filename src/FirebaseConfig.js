import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBrs4FpDCzKE114dOhfJwzOkRhZX06gVlQ",
    authDomain: "acciojob-project-73f25.firebaseapp.com",
    projectId: "acciojob-project-73f25",
    storageBucket: "acciojob-project-73f25.appspot.com",
    messagingSenderId: "466541015863",
    appId: "1:466541015863:web:fa5c05c451cec9415fe0b2",
    measurementId: "G-JN4R1EWFDQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const auth = firebase.auth();
  const db = firebaseApp.firestore();

  export {auth, db};