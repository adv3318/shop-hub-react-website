import Button from '@/components/ui/Button/Button.jsx';
import { useAuth } from '@/context/AuthContext.jsx';

import style from './Auth.module.scss';

const Auth = () => {
  const { user, logout } = useAuth();

  const { list, navbarUser, authEmail } = style;
  return (
    <div>
      {!user ? (
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
      ) : (
        <div className={navbarUser}>
          <span className={authEmail}>{user.email}</span>
          <Button className="btn-secondary" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Auth;
