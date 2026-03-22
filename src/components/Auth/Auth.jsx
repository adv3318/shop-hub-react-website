import Button from '@/components/ui/Button/Button.jsx';

import style from './Auth.module.scss';

const Auth = () => {
  const {
    list,
  } = style;
  return (
    <div>
      <ul className={list}>
        <li>
          <Button href="/auth" className="btn-secondary">
            Login
          </Button>
        </li>
        <li>
          <Button href="/auth" className="btn-primary">
            Signup
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Auth;