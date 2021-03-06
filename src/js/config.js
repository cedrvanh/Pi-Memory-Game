import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAH5opnXbXMVyfsY3nNkZeYIfZe0vcCYOI",
    authDomain: "pi-simonsays.firebaseapp.com",
    databaseURL: "https://pi-simonsays.firebaseio.com",
    projectId: "pi-simonsays",
    storageBucket: "pi-simonsays.appspot.com",
    messagingSenderId: "773228748604",
    appId: "1:773228748604:web:50fdb3dc22bd9f80ff8839"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();