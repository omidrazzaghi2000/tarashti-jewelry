import React, { useEffect,useState } from 'react'
import Coins from '../components/Coins'
import Prices from '../components/Prices'

// for back4app
import Parse from 'parse/dist/parse.min.js';
/** Initializing the SDK. **/
Parse.initialize('HOMspH4VDRuAN3wyyxcyNISZzfSGkrM194UAdbEB','HVh21Q8XALwj9MstDAMUWlNFHs9M4EZrJd1NPOwd');
Parse.serverURL = 'https://parseapi.back4app.com/';

function Home(props) {

  const [orders,setOrders] = useState()

  useEffect(()=>{
    async function getOrders(){
      //create your Parse Query using the Person Class you've created
      let query = new Parse.Query('orders');
      //run the query to retrieve all objects on Person class, optionally you can add your filters
      let queryResult = await query.find();

      setOrders(queryResult)
    }
    getOrders()
  },[])
  return (
    <div>
        <Prices/>
        <Coins orders={orders}/>
    </div>
  )
}

export default Home