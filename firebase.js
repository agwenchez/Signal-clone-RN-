import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyApZ1UVDaHOTqks_WBkdbqlUakMZvf-tMQ",
  authDomain: "signal-clone-3a1ff.firebaseapp.com",
  projectId: "signal-clone-3a1ff",
  storageBucket: "signal-clone-3a1ff.appspot.com",
  messagingSenderId: "346666734288",
  appId: "1:346666734288:web:4e05912ba8e84be43e84d5",
  measurementId: "G-D59DNC3VW6"
};

let app;
// initialize app if only it wasnt initialized before
firebase.apps.length === 0 ? app = firebase.initializeApp(firebaseConfig) : app = firebase.app()

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }