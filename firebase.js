import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

    apiKey: "AIzaSyDuWJID2XYQCpIB6-8FqhA9HyonM46UARM",
  
    authDomain: "igrace-login.firebaseapp.com",
  
    projectId: "igrace-login",
  
    storageBucket: "igrace-login.appspot.com",
  
    messagingSenderId: "607049893542",
  
    appId: "1:607049893542:web:6ee9362a322df28ab31667",
  
    measurementId: "G-1YNYNRHJ1H"
  
  };
  
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);