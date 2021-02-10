import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDuMlw639vzvfPFzdFp9WQuYB3SVqEUeYY",
  authDomain: "lyrics-soup-pro.firebaseapp.com",
  projectId: "lyrics-soup-pro",
  storageBucket: "lyrics-soup-pro.appspot.com",
  messagingSenderId: "183515549286",
  appId: "1:183515549286:web:2f405cab1362ef54ec67a7",
  measurementId: "G-6ZSYEGEF62"
}

firebase.initializeApp(firebaseConfig);

export default firebase;