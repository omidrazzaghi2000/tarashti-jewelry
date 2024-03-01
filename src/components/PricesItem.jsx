import React, { useCallback } from 'react'
import { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
import { saveNewOrder } from './Prices'
import {UserAuth} from "../context/AuthContext"
import {  toast } from 'react-toastify';
function PricesItem({ item }) {
    const {user, logout} = UserAuth()
    const [buyNumber, setBuyNumber] = useState('')
    const [sellNumber, setSellNumber] = useState('')
    const handleBuyNumber = event => {
        setBuyNumber(event.target.value);
    }
    const handleSellNumber = event =>{
        setSellNumber(event.target.value)
    }

    function sendBuyOrder(item) {
        if(user){
            let msg = "آیا مطمئن هستید که می خواهید"
            msg += ` ${buyNumber} `;
            msg += `تعداد از `;
            msg += `${item.get('name')} `
            msg += `خریداری نمایید.`
            if(window.confirm(msg)) {
                // Save it!
                saveNewOrder(user,item,buyNumber,true)
            } else {
                console.log('Thing was not saved to the database.');
            }
        }else{
            toast('.لطفا ابتدا وارد شوید')
        }
        
    }

    function sendSellOrder(item) {
        if(user){
            let msg = "آیا مطمئن هستید که می خواهید"
            msg += ` ${sellNumber} `;
            msg += `تعداد از `;
            msg += `${item.get('name')} `
            msg += `به فروش برسانید.`
            if(window.confirm(msg)) {
                // Save it!
                saveNewOrder(user,item,sellNumber,false)
            } else {
                console.log('Thing was not saved to the database.');
            }
        }else{
            toast('.لطفا ابتدا وارد شوید')
        }
        
    }

    return (
        <div>
            <div className='rounded-div p-3  ease-out duration-300'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img className='rounded-full w-24' src={'https://artelifestyle.com/wp-content/uploads/2022/04/Untitled-2.jpg'} alt='عکس مورد' />
                        <div>
                            {/* <Link to={`/coin/${coin.item?.id}`}>
                                <h2 className='font-semibold text-xl'>{coin.item.name}</h2>
                            </Link> */}
                            <h5 className='text-sm font-bold text-gray-500'>{item.get('name')}</h5>
                        </div>
                    </div>
                    <div className='block'>
                        <div className='flex my-4'>
                            <div>
                                <p>{item.get('buy_price')}</p>
                                <h3>تومان</h3>
                            </div>
                            <div className='cursor-pointer'>
                                <h3>خرید</h3>
                                <FaPlusCircle color='orange' size={15} className="relative top-[6px] right-1"></FaPlusCircle>

                            </div>
                            <div>
                                <input type='number' min="0" style={{ width: "100px", color: "#222" }} value={buyNumber} onChange={handleBuyNumber} />
                                <button className='text-xs px-3 py-1 dark:bg-slate-700 bg-slate-300 rounded-lg'
                                    onClick={(_)=>sendBuyOrder(item)}>ثبت</button>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className=''>
                                <p>{item.get('sell_price')}</p>
                                <h3>تومان</h3>
                            </div>
                            <div className='cursor-pointer'>
                                <h3>فـروش</h3>
                                <FaPlusCircle color='orange' size={15} className="relative top-[6px] right-1"></FaPlusCircle>

                            </div>
                            <div>
                                <input type='number' min="0" style={{ width: "100px", color: "#222" }} value={sellNumber} onChange={handleSellNumber} />
                                <button className='text-xs px-3 py-1 dark:bg-slate-700 bg-slate-300 rounded-lg'
                                    onClick={(_)=>sendSellOrder(item)} >ثبت</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PricesItem