import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp44HLimQoWs0MxSLOsvlcAKHON4fBbm4",
  authDomain: "avtwebwallet.firebaseapp.com",
  projectId: "avtwebwallet",
  storageBucket: "avtwebwallet.appspot.com",
  messagingSenderId: "283561437319",
  appId: "1:283561437319:web:7dcf983d6cc3e18cb7b022"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)