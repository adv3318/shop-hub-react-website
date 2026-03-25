import './Button.scss';

import { Link } from 'react-router-dom';

const Button = (props) => {

  const { href, className = "", type="button", children } = props;

  if (href) {
    return (
      <Link to={href} className={`btn ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
