import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBL3dU513UaZN-U-xGI1Fn714HQaZzTqZA",
  authDomain: "messenger1-1.firebaseapp.com",
  projectId: "messenger1-1",
  storageBucket: "messenger1-1.appspot.com",
  messagingSenderId: "211594978567",
  appId: "1:211594978567:web:ec64c3b4ed4ee2bf7bd1a2"
});

const db = firebaseApp.firestore();

export default db;