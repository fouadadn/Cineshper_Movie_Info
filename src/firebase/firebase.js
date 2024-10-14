// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC5rVyS6kFpl-jePMCYUEuOEpryv7W8YBw",
    authDomain: "cinesphere-1909.firebaseapp.com",
    projectId: "cinesphere-1909",
    storageBucket: "cinesphere-1909.appspot.com",
    messagingSenderId: "302274361150",
    appId: "1:302274361150:web:aaa39eb57bac15e1c41e6f",
    measurementId: "G-4P9KH62587"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth