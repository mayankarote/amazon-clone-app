// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDQ2rxNkejxqzTu5B3YHeYClv9rF6RfsJQ",
  authDomain: "clone-80748.firebaseapp.com",
  projectId: "clone-80748",
  storageBucket: "clone-80748.appspot.com",
  messagingSenderId: "955881352497",
  appId: "1:955881352497:web:72d8c9a57fee65e5a05410",
  measurementId: "G-4RNE9QZH04",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
