import React, { useEffect,useState } from 'react'
import Orders from '../components/Orders'
import Prices from '../components/Prices'

// for back4app
import Parse from 'parse/dist/parse.min.js';
/** Initializing the SDK. **/
Parse.initialize('HOMspH4VDRuAN3wyyxcyNISZzfSGkrM194UAdbEB','HVh21Q8XALwj9MstDAMUWlNFHs9M4EZrJd1NPOwd');
Parse.serverURL = 'https://parseapi.back4app.com/';

function Home(props) {

  return (
    <div>
        <Prices/>
        <Orders/>
    </div>
  )
}

export default Home