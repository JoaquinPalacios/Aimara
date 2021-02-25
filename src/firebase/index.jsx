 import firebase from 'firebase/app';
 import "@firebase/firestore";
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const app = firebase.initializeApp({
//   var firebaseConfig = {
    apiKey: "AIzaSyBjlnYjC_NSKJzk8kG_AnF49THzFp4vWdo",
    authDomain: "aimara-react-project.firebaseapp.com",
    projectId: "aimara-react-project",
    storageBucket: "aimara-react-project.appspot.com",
    messagingSenderId: "457320787924",
    appId: "1:457320787924:web:04b22f7eb1d663b1bd7041",
    measurementId: "G-M9N9ZLXV9G"
  });

export const getFirebase = () => {
    return app;
}
export const getFirestore = () => {
    firebase.analytics();
    return firebase.firestore(app);
}
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();