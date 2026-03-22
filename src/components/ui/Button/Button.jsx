import './Button.scss';

import { Link } from 'react-router-dom';

const Button = (props) => {

  const { href, className = "", children } = props;

  if (href) {
    return (
      <Link to={href} className={`btn ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;