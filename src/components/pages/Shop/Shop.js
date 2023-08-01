import React from 'react'
import ShopCard from './ShopCard'

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__container container">
        <div className="shop__wrapper">
          <div className="shop__list">
            <ShopCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop