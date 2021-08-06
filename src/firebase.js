import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAw7Vm5O_XKimgzoAN4zkKbjezsaao_8vs",
    authDomain: "twitterclone-6e545.firebaseapp.com",
    projectId: "twitterclone-6e545",
    storageBucket: "twitterclone-6e545.appspot.com",
    messagingSenderId: "945836098364",
    appId: "1:945836098364:web:3351c64602f2e6cde05439",
    measurementId: "G-HEBPV90VWR"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export default db;