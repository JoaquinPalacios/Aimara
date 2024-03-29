 import firebase from 'firebase/app';
 import "firebase/firestore";
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const app = firebase.initializeApp({
//   var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  });

export const getFirebase = () => {
    return app;
};
export const getFirestore = () => {
    // firebase.analytics();
    return firebase.firestore(app);
};