import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB2YMRClUfdI-Zrki56CQ68ndhvzizvSZI",
  authDomain: "lunch-rush-da526.firebaseapp.com",
  databaseURL: "https://lunch-rush-da526.firebaseio.com",
  projectId: "lunch-rush-da526",
  storageBucket: "lunch-rush-da526.appspot.com",
  messagingSenderId: "978306169130"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
