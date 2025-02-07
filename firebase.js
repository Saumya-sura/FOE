// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRFYips3LuS2XLuatrOwWjHckQZz-f7gA",
  authDomain: "mahavir-computers.firebaseapp.com",
  projectId: "mahavir-computers",
  storageBucket: "mahavir-computers.appspot.com",
  messagingSenderId: "107635706893",
  appId: "1:107635706893:web:1b04bf283da69ae90c9944",
  measurementId: "G-XHH17QPGQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
