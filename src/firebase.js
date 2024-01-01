import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// import * as Realm from "realm-web";
// const APP_ID = "application-0-chibt"
//
//
// const realm_application = new Realm.App({ id: APP_ID });
//
// /* login as anonymous user */
// const credentials = Realm.Credentials.anonymous();
//
// /* authenticate user */
// const user = await app.logIn(credentials);
//
// /* `App.currentUser` updates to match the logged in user */
// console.assert(user.id === realm_application.currentUser.id);





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


