import { useContext, useState } from 'react';

import Form from '@/components/Form/Form.jsx';
import { AuthContext } from '@/context/AuthContext.jsx';

import style from './AuthPage.module.scss';


const AuthPage = () => {

  const { authContainer, title, authSwitch, authLink } = style;

  const { user, logout } = useContext(AuthContext);

  const [mode, setMode] = useState('signup');


  return (
    <main>
      <div className="container">
        <div className={authContainer}>

          {user && <p>User logged in: {user.email}</p>}
          <button onClick={logout} type="button">Logout</button>

          <h1 className={title}>{mode === 'signup' ? 'Sign Up' : 'Login'}</h1>
          <Form mode={mode} />
          <div className={authSwitch}>
            {mode === 'signup' ? (
              <p>
                Already have an account?{' '}
                <span
                  className={authLink}
                  role="button"
                  tabIndex={0}
                  onClick={() => setMode('login')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setMode('login');
                    }
                  }}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                Dont have an account?{' '}
                <span
                  className={authLink}
                  role="button"
                  tabIndex={0}
                  onClick={() => setMode('signup')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setMode('signup');
                    }
                  }}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
