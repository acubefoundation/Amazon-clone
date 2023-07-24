import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlSyTJvwBRCWiWFvbw2kMDwspVLXjJyO0",
    authDomain: "aa-amaz-clone.firebaseapp.com",
    projectId: "aa-amaz-clone",
    storageBucket: "aa-amaz-clone.appspot.com",
    messagingSenderId: "1068881913120",
    appId: "1:1068881913120:web:6d1da6fdfedd3417ada345",
    measurementId: "G-X9RSYVVLNJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };