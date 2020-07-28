import * as firebase from "firebase/app";
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyDd0FGsvoYOvISxauGTiNiZiBKF7Ic7yDk",
    authDomain: "library-65749.firebaseapp.com",
    databaseURL: "https://library-65749.firebaseio.com",
    projectId: "library-65749",
    storageBucket: "library-65749.appspot.com",
    messagingSenderId: "165834123361",
    appId: "1:165834123361:web:e31435ee24ca8478282220",
    measurementId: "G-KHWLF2ZJ4C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const database = firebase.database()
  const rootRef = firebase.database().ref("/blubb")

  export {
      database,
      rootRef
  }