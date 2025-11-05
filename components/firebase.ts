import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAxmaefnqTGHj1sqON9_KC4b7jbez9jLlY",
    authDomain: "mp-social-b853e.firebaseapp.com",
    projectId: "mp-social-b853e",
    storageBucket: "mp-social-b853e.appspot.com",
    messagingSenderId: "302884484666",
    appId: "1:302884484666:web:591aabc5fd6f839a4da703",
    measurementId: "G-243PLQ41BL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
