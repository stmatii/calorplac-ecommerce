import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDrrjIyFmIKLFtYD5UUwlBrrFdjvPrZjUk",
    authDomain: "calor-plac.firebaseapp.com",
    projectId: "calor-plac",
    storageBucket: "calor-plac.appspot.com",
    messagingSenderId: "1027960455647",
    appId: "1:1027960455647:web:e294eb8be07ab90e21446a"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export function getFirebase(){
      return app
  }

  export function getFirestore(){
      
    return firebase.firestore(app)
  }