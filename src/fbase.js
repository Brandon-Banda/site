import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBpbBBTExsYypqqIuF-FMWBkgpe512Deno",
  authDomain: "site-eedbf.firebaseapp.com",
  projectId: "site-eedbf",
  storageBucket: "site-eedbf.appspot.com",
  messagingSenderId: "166888273625",
  appId: "1:166888273625:web:23bf7e055174cb7730f0c8"
};
// Initialize Firebase
export const fbase = firebase.initializeApp(firebaseConfig);