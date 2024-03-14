import React, { useEffect, useState } from 'react'
import CoinItem from './CoinItem'


function Coins({ orders }) {

    const [searchText, setSearchText] = useState("")

    
    return (
        <div className='rounded-div my-10 py-4'>
            <div className='flex justify-end my-3'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" className='bg-gray-100 dark:bg-gray-600 rounded-md py-1 indent-3 outline-none' placeholder='Search' />
            </div>
            <table className='w-full border-collapse text-center'>
                <thead className='dark:text-white'>
                    <tr className='border-b'>
                        <th>username</th>
                        <th>item_number</th>
                        <th>is_buy</th>
                        <th>item_name</th>
                        <th>Price</th>
                        
                        
                    </tr>
                </thead>
                <tbody className='dark:text-white'>
                    {/* {coins.filter((value) => {
                        if (searchText === "") {
                            return value
                        } else if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
                            return value
                        } else {
                            return ""
                        }
                    }).map((order) => (
                        <CoinItem key={order.get('objectId')} order={order} />
                    ))} */}

                    {orders!==undefined&&(orders.map(function (order){
                        return <CoinItem key={order.get('objectId')} order={order} />
                    }))}
                </tbody>
            </table>
        </div>
    )
}

export default Coins