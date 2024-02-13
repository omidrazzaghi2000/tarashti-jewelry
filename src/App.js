import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import CoinPage from "./components/CoinPage";
import Footer from "./components/Footer";
import SignUp from "./routes/SingUp";
import Account from "./routes/Account";
import { AuthContextProvider } from "./context/AuthContext";
import * as Realm from "realm-web";

import { Toaster, toast } from 'sonner';
import {Credentials as credentials} from "realm-web";


function App() {
  const [data, setData] = useState([])
  const [realmApp,setRealmApp] = useState()
  const [databaseUser,setDatabaseUser] = useState()
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true"
  const APP_ID = "application-0-chibt"
  // Add your App ID


  useEffect( () => {
    async function connectToDatabase(){
      const app = (new Realm.App({id: APP_ID}));
      setDatabaseUser(await app.logIn(Realm.Credentials.anonymous()))
      setRealmApp(app);
      const credentials = Realm.Credentials.anonymous();
      const user = await app.logIn(credentials);

      const mongodb = user.mongoClient('mongodb-atlas');
      const database = mongodb.db('Tarashti');
      const collection = database.collection('users');
      await collection.find({email: "omidrazzaghi2000@gmail.com"}).then(
          (e)=>{
            console.log(e)
          }
      ).catch(
          (e)=>toast.error(`Error: ${e.toString()}`)
      )
    }
    connectToDatabase().then(()=>{
      toast.info("Connected to Database Successfully")
    }).catch((e)=>{
      toast.error(`Error: ${e.toString()}`)
    })
    axios.get(url)
        .then((response) => {
          setData(response.data)
        })
  }, [url])


  return (
      <AuthContextProvider>
        <div className="App">
          <Toaster/>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home coins={data}/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/coin/:coinId" element={<CoinPage/>}>
              <Route path=":coinId"/>
            </Route>
          </Routes>
          <Footer/>
        </div>
      </AuthContextProvider>
  );
}

export default App;
