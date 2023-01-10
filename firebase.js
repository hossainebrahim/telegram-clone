import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaRymZ3-jkZuLzDF7sfXwOtbRO0IapBs0",
  authDomain: "telegram-clone-a3fff.firebaseapp.com",
  projectId: "telegram-clone-a3fff",
  storageBucket: "telegram-clone-a3fff.appspot.com",
  messagingSenderId: "1097564993361",
  appId: "1:1097564993361:web:df43e3df74ef8a2b108570",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
