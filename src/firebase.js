import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlbxjhXphQKw18JJw4ahikL7737apFjts",
    authDomain: "linkedin-clone-e2aef.firebaseapp.com",
    projectId: "linkedin-clone-e2aef",
    storageBucket: "linkedin-clone-e2aef.appspot.com",
    messagingSenderId: "401699062431",
    appId: "1:401699062431:web:938174d43fd8d27cbf18aa",
    measurementId: "G-TQPMFWQ0Q3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };