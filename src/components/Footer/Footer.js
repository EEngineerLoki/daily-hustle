import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container container">
            <nav className="footer__nav">
               <ul className="footer__list">
                  <li className="footer__item">
                     <Link to='/'>Home</Link>
                  </li>
                  <li className="footer__item">
                     <Link to='/blog'>Blog</Link>
                  </li>
                  <li className="footer__item">
                     <Link to='/shop'>Shop</Link>
                  </li>
                  <li className="footer__item">
                     <Link to='/contact'>Contact</Link>
                  </li>
                  <li className="footer__icon">
                     <a href="/contact"><FacebookIcon/></a>
                     <div className="footer__item">
                        facebook.com/DailyHustl3
                     </div>
                  </li>
                  <li className="footer__icon">
                     <a href="/contact"><InstagramIcon/></a>
                     <div className="footer__item">
                        https://www.instagram.com/dailyhustle24_7/
                     </div>
                  </li>
               </ul>
            </nav>
         </div>
         <div className="footer__tagging">
         “As long as you live, keep learning how to live.” -Seneca
         </div>
         <div className="footer__copyright">@dailyhustle_2023</div>
      </footer>
   );
};

export default Footer;
