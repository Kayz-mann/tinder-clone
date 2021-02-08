import firebase from "firebase";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyx2QVluYPRfDKq2enkglEkZr1cUlQqK8",
    authDomain: "tinder-clone-aaaca.firebaseapp.com",
    databaseURL: "https://tinder-clone-aaaca.firebaseio.com",
    projectId: "tinder-clone-aaaca",
    storageBucket: "tinder-clone-aaaca.appspot.com",
    messagingSenderId: "750747534850",
    appId: "1:750747534850:web:d0046c0a04a35bb21c091b",
    measurementId: "G-L00XF1JJ15",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
