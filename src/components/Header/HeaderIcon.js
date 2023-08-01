import React from 'react';
import facebook from '../../assets/img/MARKETING LOGO clear.png';
import twitter from '../../assets/img/MARKETING LOGO clear.png';

const HeaderIcon = () => {
   return (
      <div className="header__socialIcon">
         <a
            href="/"
            className="header__socialIcon__link"
            aria-label="visit facebook"
         >
            <img src={facebook} alt="facebook" />
         </a>
         <a
            href="/"
            className="header__socialIcon__link"
            aria-label="visit twitter"
         >
            <img src={twitter} alt="facebook" />
         </a>
      </div>
   );
};

export default HeaderIcon;
