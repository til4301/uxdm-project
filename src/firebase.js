import firebase from 'firebase/app'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4QgSWv4597QRXW-tlpRVIohDmHZ9g4P4",
  authDomain: "rocketivity-28db8.firebaseapp.com",
  projectId: "rocketivity-28db8",
  storageBucket: "rocketivity-28db8.appspot.com",
  messagingSenderId: "642906508025",
  appId: "1:642906508025:web:b670b50d44655f004f3028",
  measurementId: "G-S2WDMS9WZV",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
