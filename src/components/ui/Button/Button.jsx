import './Button.scss';

import { Link } from 'react-router-dom';

const Button = (props) => {
  const { href, className = '', type = 'button', children, ...rest } = props;

  if (href) {
    return (
      <Link to={href} className={`btn ${className}`} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`btn ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
