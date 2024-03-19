import React, { useEffect, useState } from 'react'
import OrderItem from './OrderItem'
// for back4app
import Parse from 'parse/dist/parse.min.js';

function Orders() {

    const [searchText, setSearchText] = useState("")

    const [orders, setOrders] = useState()


    useEffect(() => {
        async function getOrders() {
            //create your Parse Query using the Person Class you've created
            let query = new Parse.Query('orders');
            //run the query to retrieve all objects on Person class, optionally you can add your filters
            let queryResult = await query.find();

            setOrders(queryResult)
        }
        getOrders()
    }, [])
    return (
        <div className='rounded-div my-10 py-4'>
            {/* <div className='flex justify-end my-3'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" className='bg-gray-100 dark:bg-gray-600 rounded-md py-1 indent-3 outline-none' placeholder='Search' />
            </div> */}
            <table className='w-full border-collapse text-center'>
                <thead className='dark:text-white'>
                    <tr className='border-b'>
                        <th>کاربر</th>
                        <th>تعداد</th>
                        <th>خرید/فروش</th>
                        <th>نام</th>
                        <th>قیمت</th>
                        <th>قیمت کل</th>


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

                    {orders !== undefined && (orders.map(function (order) {
                        return <OrderItem key={order.get('objectId')} order={order} />
                    }))}
                </tbody>
            </table>
        </div>
    )
}

export default Orders