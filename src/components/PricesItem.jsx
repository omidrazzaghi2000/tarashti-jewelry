import React from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { Link } from "react-router-dom"


function PricesItem({ item }) {
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
                            <div className='hover:scale-105 cursor-pointer '>
                                <h3>خریـد</h3>
                                <FaPlusCircle color='orange' size={15} className="relative top-[6px] right-1"></FaPlusCircle>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className=''>
                            <p>{item.get('sell_price')}</p>
                            <h3>تومان</h3>
                            </div>
                            <div className='hover:scale-105 cursor-pointer'>
                            <h3>فـروش</h3>
                                <FaPlusCircle color='orange' size={15} className="relative top-[6px] right-1"></FaPlusCircle>
                                <input  type='number'/>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PricesItem