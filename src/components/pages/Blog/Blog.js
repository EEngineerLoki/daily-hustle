import React from 'react';
import BlogButton from './BlogButton';
import BlogTabs from './BlogTabs';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Blog = () => {
   let history = useNavigate();
   const { onHandleClick, blogDisplay, isTransition, dataIndex } =
      BlogTabs();

   return (
      <section className="blog" id="features">
         <div className="blog__container container">
            <div className="blog__heading">
               <h2 className="blog__title heading">FEATURES</h2>
            </div>
            <div className="blog__wrapper">
               <div className="blog__button">
                  <BlogButton
                     onHandleClick={onHandleClick}
                     dataIndex={dataIndex}
                  />
               </div>
               <div
                  className={`blog__content ${
                     isTransition ? 'transitioning' : ''
                  }`}
               >
                  <div className="blog__content__mainwrapper">
                     <div className="blog__content__mainwrapper__info">
                        <p className="blog__content__mainwrapper__paragraph paragraph">
                           {blogDisplay.paragraph}
                        </p>
                        <div className="blog__cta__wrapper">
                           <button
                           className="btn btn--blue btn--info">
                              <Link to='./reviews' className='link'>Explore</Link>
                           </button>
                        </div>
                     </div>
                     <div className="blog__content__mainwrapper__illustration">
                        <img
                           src={blogDisplay.image}
                           alt={blogDisplay.altText}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Blog;