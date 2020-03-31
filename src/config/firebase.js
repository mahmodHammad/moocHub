import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiQxdjrPV4J7pRrIvT4acgtH0W_2xcY9Y",
  authDomain: "electrical2nd-2020.firebaseapp.com",
  databaseURL: "https://electrical2nd-2020.firebaseio.com",
  projectId: "electrical2nd-2020",
  storageBucket: "electrical2nd-2020.appspot.com",
  messagingSenderId: "1001221269957",
  appId: "1:1001221269957:web:95f4ffc0306a1a0c8343ac",
  measurementId: "G-XQX7DXYKB2"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
