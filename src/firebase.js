import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDq5e9_98tkxdFoxyyEpGyapAyVmwGVI0U",
  authDomain: "sj-netflix.firebaseapp.com",
  projectId: "sj-netflix",
  storageBucket: "sj-netflix.appspot.com",
  messagingSenderId: "842443488159",
  appId: "1:842443488159:web:168a381e3e245ecda21baa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
