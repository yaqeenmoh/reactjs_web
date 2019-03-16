import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
const settings = {timestampsInSnapshots: true};
var config = {
  apiKey: "AIzaSyBOKHXWovu5JxEF1GeZFXZIX3X10Lo94jU",
  authDomain: "project-d7a2c.firebaseapp.com",
  databaseURL: "https://project-d7a2c.firebaseio.com",
  projectId: "project-d7a2c",
  storageBucket: "project-d7a2c.appspot.com",
  messagingSenderId: "990408593935"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;