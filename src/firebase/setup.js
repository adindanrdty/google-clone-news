import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC12B-XdxVUko1MMuVA27Xim7KkgMm0jNs",
    authDomain: "goole-clone-news.firebaseapp.com",
    projectId: "goole-clone-news",
    storageBucket: "goole-clone-news.appspot.com",
    messagingSenderId: "756839006288",
    appId: "1:756839006288:web:6f8b3c2a6aedbd2915d155"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();