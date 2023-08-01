import blackLogo from '../../assets/img/MARKETING LOGO clear.png';
import whiteLogo from '../../assets/img/MARKETING LOGO clear.png';

const Logo = ({ click }) => {
   return <img src={click ? whiteLogo : blackLogo} alt="Bookmark - Logo" />;
};

export default Logo;
