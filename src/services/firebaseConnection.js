import {initializeApp} from 'firebase/app'
import {getAuth, RecaptchaVerifier } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDeTiuA5MyyAbbiNX4NllfESqiEsmlytP4",
    authDomain: "sms-login-168bb.firebaseapp.com",
    projectId: "sms-login-168bb",
    storageBucket: "sms-login-168bb.appspot.com",
    messagingSenderId: "604615385980",
    appId: "1:604615385980:web:74ede9fd1ebbd2d4407af9",
    measurementId: "G-LWJSXPPLJ5"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

 