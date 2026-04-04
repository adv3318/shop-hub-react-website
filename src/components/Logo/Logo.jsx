import { Link } from 'react-router-dom';

import style from './Logo.module.scss';

const Logo = () => {
  const { logo } = style;

  return (
    <Link to={'/'} className={logo}>
      ShopHub
    </Link>
  );
};

export default Logo;
