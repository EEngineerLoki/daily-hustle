import React from 'react'
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import { shopData } from '../../../data';

const ShopCard = () => {
  return (
    <React.Fragment>
        {shopData.map((shop, index) => {
            return (
                <div className="shop__card" key={index}>
                    <div className="shop__image">
                        <img src={shop.cover} alt={shop.altText} />
                    </div>
                    <div className="shop__contents">
                        <h2 className="shop__title heading">{shop.title}</h2>
                        <p className="shop__author paragraph">{shop.author}</p>
                        <p className="shop__description paragraph">{shop.description}</p>
                        <div className="shop__cta__wrapper">
                            <div className="shop__merchant">
                                <select name="merchant" className='shop__dropdown'>
                                <option value="amazon" className='shop__item'>Select Here</option>
                                <option value="amazon" className='shop__item'>Amazon</option>
                                <option value="shopify" className='shop__item'>Shopify</option>
                                <option value="shopee" className='shop__item'>Shopee</option>
                                <option value="lazada" className='shop__item'>Lazada</option>
                                </select>
                            </div>
                            <div className="shop__cta__button btn btn--white btn--intro">
                                <a href="https://www.facebook.com/matthew.loquinerio/">{shop.button}</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </React.Fragment>
  );
};

export default ShopCard