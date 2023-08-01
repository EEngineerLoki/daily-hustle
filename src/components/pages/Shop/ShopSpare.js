import React from 'react'
import Home from '../Home/Home';
import { Link } from 'react-router-dom';

const Shop = ({
  cover,
  title,
  author,
  description,
  button
}) => {
  return (
    <section className="shop">
      <div className="shop__container container">
        <div className="shop__wrapper">
          <ul className="shop__list">
            {/* Daily Stoic Card */}
            <li className="shop__card"> 
              <div className="shop__image">
                <img src={cover} alt="Daily Stoic.png" />
              </div>
              <div className="shop__contents">
                <h2 className="shop__title heading">{title}</h2>
                <p className="shop__author paragraph">{author}</p>
                <p className="shop__description paragraph">{description}</p>
                <div className="shop__cta__wrapper">
                  <div className="shop__merchant">
                    <select name="merchant" className='shop__dropdown'>
                      <option value="amazon" className='shop__item'>Amazon</option>
                      <option value="shopify" className='shop__item'>Shopify</option>
                      <option value="shopee" className='shop__item'>Shopee</option>
                      <option value="lazada" className='shop__item'>Lazada</option>
                    </select>
                  </div>
                  <div className="shop__cta__button btn btn--white btn--intro">
                    <Link to='/' element={<Home/>}>{button}</Link>
                  </div>
                </div>
              </div>
            </li>
            {/* Atomic Habits Card */}
            <li className="shop__card">
            <div className="shop__image">
                <img src={cover} alt="Daily Stoic.png" />
              </div>
              <div className="shop__contents">
                <h2 className="shop__title heading">{title}</h2>
                <p className="shop__author paragraph">{author}</p>
                <p className="shop__description paragraph">{description}</p>
                <div className="shop__cta__wrapper">
                  <div className="shop__merchant">
                    <select name="merchant" className='shop__dropdown'>
                      <option value="amazon" className='shop__item'>Amazon</option>
                      <option value="shopify" className='shop__item'>Shopify</option>
                      <option value="shopee" className='shop__item'>Shopee</option>
                      <option value="lazada" className='shop__item'>Lazada</option>
                    </select>
                  </div>
                  <div className="shop__cta__button btn btn--white btn--intro">
                    <Link to='/' element={<Home/>}>{button}</Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Shop;