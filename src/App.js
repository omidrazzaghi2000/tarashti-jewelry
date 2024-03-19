import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import CoinPage from "./components/CoinPage";
import SignUp from "./routes/SingUp";
import Account from "./routes/Account";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <AuthContextProvider>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/tarashti-jewelry" element={<Home/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/coin/:coinId" element={<CoinPage/>}>
            <Route path=":coinId"/>
          </Route>
        </Routes>
        {/* <Footer/> */}
      </div>
      <ToastContainer/>
    </AuthContextProvider>
  );
}

export default App;
