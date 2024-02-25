import React, { useEffect, useState } from 'react'
import axios from "axios"
import PricesItem from './PricesItem'
// for back4app
import Parse from 'parse/dist/parse.min.js';

/** Initializing the SDK. **/
Parse.initialize('HOMspH4VDRuAN3wyyxcyNISZzfSGkrM194UAdbEB','HVh21Q8XALwj9MstDAMUWlNFHs9M4EZrJd1NPOwd');
Parse.serverURL = 'https://parseapi.back4app.com/';

function Prices() {

    const [data, setData] = useState([])
    const url = "https://api.coingecko.com/api/v3/search/trending"
    async function fetchPrice(){
        let query = new Parse.Query("Items");
        let queryResult = await query.find();
        console.log(queryResult[0].id)
        setData(queryResult)
    }
    useEffect(() => {
        fetchPrice();
    }, [url])

    return (
        <div className='rounded-div py-5'>
            <h1 className='text-3xl text-right font-semibold my-5'>قیمتهای روز</h1>

            <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1'>
                {data.map((item) => (
                    <PricesItem key={item.id} item={item} />
                ))}
                {/* {data} */}
            </div>
        </div>
    )
}

export default Prices