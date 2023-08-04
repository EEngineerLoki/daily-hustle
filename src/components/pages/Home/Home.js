import React from 'react';
import { Link } from 'react-router-dom'

const Home = ({
   homeImg,
   headingTitle,
   paragraph,
   chrome,
   firefox
}) => {
   return (
     <section className='home'>
       <div className='home__container container'>
         <div className="home__wrapper">
           <div className="home__image">
             <img src={homeImg} alt="seneca image" />
           </div>
           <div className="home__intro">
             <h1 className="home__title heading">{headingTitle}</h1>
             <p className="home__paragraph paragraph">{paragraph}</p>
             <div className="home__cta__wrapper">
               <button className="hero__cta btn btn--blue btn--intro">
                 <Link to='/blog'>{chrome}</Link>
                </button>
                <button className="hero__cta btn btn--blue btn--intro">
                 <Link to='/contact'>{firefox}</Link>
                </button>
              </div>
           </div>
         </div>
       </div>
     </section>
   );
};

export default Home;
