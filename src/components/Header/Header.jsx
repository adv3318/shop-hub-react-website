import Auth from "@/components/Auth/Auth.jsx";
import Logo from "@/components/Logo/Logo.jsx";
import Navbar from "@/components/Navbar/Navbar.jsx";

import style from './Header.module.scss';

const Header = () => {

  const {
    header,
    row,
  } = style;

  return (
    <header className={header}>
      <div className="container">
        <div className={row}>
          <Logo />
          <Navbar />
          <Auth />
        </div>
      </div>
    </header>
  );
};

export default Header;