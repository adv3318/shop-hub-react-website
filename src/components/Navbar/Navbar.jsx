import { Link } from 'react-router-dom';

import style from './Navbar.module.scss';

const Navbar = () => {
  const { list, link } = style;
  return (
    <nav>
      <ul className={list}>
        <li>
          <Link to="/" className={link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/checkout" className={link}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
