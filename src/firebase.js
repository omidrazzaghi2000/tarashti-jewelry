import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAgPYJHs_jlUKAuaGrxTYWlgVglBv9ClOg",
  authDomain: "tarashtijewelry.firebaseapp.com",
  projectId: "tarashtijewelry",
  storageBucket: "tarashtijewelry.appspot.com",
  messagingSenderId: "637459857982",
  appId: "1:637459857982:web:9a95b18ef326d9ddba876f",
  measurementId: "G-XDMPBBL54N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app;