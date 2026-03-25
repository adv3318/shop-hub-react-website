import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/ui/Button/Button.jsx';
import { useAuth } from '@/context/AuthContext.jsx';

import style from './Form.module.scss';

const Form = ({ mode }) => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const { signUp, login } = useAuth();

  const { form, group, label, input, formError, errorMessage } = style;

  const onSubmit = (data) => {
    setError(null);

    let result;

    if (mode === 'signup') {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className={form} onSubmit={handleSubmit(onSubmit)} noValidate>
      {error && <div className={errorMessage}>{error}</div>}

      <div className={group}>
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input
          type="email"
          className={input}
          id="email"
          autoComplete="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email',
            },
          })}
        />
        {errors.email && <span className={formError}>{errors.email.message}</span>}
      </div>
      <div className={group}>
        <label htmlFor="password" className={label}>
          Password
        </label>
        <input
          type="password"
          className={input}
          id="password"
          autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
        />
        {errors.password && <span className={formError}>{errors.password.message}</span>}
      </div>
      <Button type="submit" className={'btn-primary btn-large'}>
        {mode === 'signup' ? 'Sign Up' : 'Login'}
      </Button>
    </form>
  );
};

export default Form;
