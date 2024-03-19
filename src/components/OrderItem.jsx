import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from "react-router-dom"
import { db } from "../firebase"
import { UserAuth } from "../context/AuthContext"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
// for back4app
import Parse from 'parse/dist/parse.min.js';

function OrderItem({order}) {

  const [username,setUsername] = useState("")

  async function getUserName(id){
    const query = new Parse.Query("_User");
    const user = await query.get(id)
    setUsername(user.get("username"))
  }

  useEffect(()=>{
    getUserName(order.get('user_id').id)
  })
  
  return (
    <tr className='h-[75px] border-b overflow-hidden'>
      {/* <td onClick={saveCoin}>
        {savedCoin ? <AiOutlineHeart color='red'/> : <AiOutlineHeart/>}
      </td> */}
      <td>{username}</td>
      {/* <td>
        <div className='flex items-center'>
          <img className='w-6 ml-2' src={coin.image} alt={coin.id} />
          <div className='w-[90px] hidden sm:table-cell'><Link to={`/coin/${coin.id}`}>{coin.name}</Link></div>
        </div>
      </td> */}
      {/* <td>
        <div><Link to={`/coin/${coin.id}`}>{coin.symbol.toUpperCase()}</Link></div>
      </td> */}
      <td>{order.get('item_number')}</td>
      <td>{(order.get('is_buy'))?'True':'False'}</td>
      <td>{order.get('item_id').get('name')}</td>
      <td>{order.get('item_id').get('price')}</td>
      <td>{order.get('item_id').get('price')*order.get('item_number')}</td>

      {/* <td className={order.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-600"}>{coin.price_change_percentage_24h.toFixed(2)}%</td> */}
      {/* <td className='w-[200px] hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td> */}
      {/* <td className='w-[200px] hidden md:table-cell' >${coin.market_cap.toLocaleString()}</td> */}
      {/* <td>
        <Sparklines svgWidth={140} svgHeight={40} data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="lightblue" />
        </Sparklines>
      </td> */}
    </tr>
  )
}

export default OrderItem