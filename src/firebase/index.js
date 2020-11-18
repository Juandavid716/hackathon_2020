import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5qRo1u0daubB2KMf8xHBBcxoeGOv3Wkw",
  authDomain: "fir-react-proyect.firebaseapp.com",
  databaseURL: "https://fir-react-proyect.firebaseio.com",
  projectId: "fir-react-proyect",
  storageBucket: "fir-react-proyect.appspot.com",
  messagingSenderId: "86176468313",
  appId: "1:86176468313:web:ef0cdf09996b2ec94f5048",
  measurementId: "G-47N00BCCEV",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
