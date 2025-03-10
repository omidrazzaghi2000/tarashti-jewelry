import React, { useEffect, useState } from 'react'
import PricesItem from './PricesItem'
// for back4app
import Parse from 'parse/dist/parse.min.js';




export async function saveNewOrder(user,item,itemNumber,isBuy) {
    

    console.log(user)


    //Create your Parse Object
    const newOrder = new Parse.Object("orders");

    // //Define its attributes
    // let usersRelation = newOrder.relation('_User')
    // usersRelation.add(user);
    newOrder.set('user_id',user.toPointer())

    // let itemRelation = newOrder.relation('Item')
    // itemRelation.add(item)
    newOrder.set('item_id',item.toPointer())
    
    newOrder.set('is_buy',isBuy)

    newOrder.set('item_number',parseInt(itemNumber))
    


    // newOrder.set("yearOfBirth", 1997);
    // newOrder.set("emailContact", "a.wed@email.io");
    // newOrder.set("attributes", ["fast","good conditioning"])
    try{
        //Save the Object
        let result = await newOrder.save()
        alert('New object created with objectId: ' + result.id);
        window.location.reload()
    }catch(error){
        alert('Failed to create new object, with error code: ' + error.message);
    }
} 

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