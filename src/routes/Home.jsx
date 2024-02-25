import React from 'react'
import Coins from '../components/Coins'
import Prices from '../components/Prices'

function Home(props) {
  return (
    <div>
        {/* <Coins coins={props.coins}/> */}
        <Prices/>
    </div>
  )
}

export default Home