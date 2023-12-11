import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjqdnu7m14JpMP_DmFEo0y8YbBiT5b4_o",
  authDomain: "netflix-clone-f0861.firebaseapp.com",
  projectId: "netflix-clone-f0861",
  storageBucket: "netflix-clone-f0861.appspot.com",
  messagingSenderId: "83445764324",
  appId: "1:83445764324:web:3f91acc907bea69e3b9cf1",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for Firestore (db) & Authentication (auth)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


export { auth, db };