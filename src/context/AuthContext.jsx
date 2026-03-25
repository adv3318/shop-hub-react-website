import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

const readUsersFromStorage = () => {
  try {
    const raw = localStorage.getItem('users');
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem('currentUserEmail')
      ? { email: localStorage.getItem('currentUserEmail') }
      : null,
  );

  const signUp = (email, password) => {
    const users = readUsersFromStorage();

    if (users.find((u) => u.email === email)) {
      return { success: false, error: 'Email already exists' };
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUserEmail', email);

    setUser({ email });

    return { success: true };
  };

  const login = (email, password) => {
    const users = readUsersFromStorage();
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return { success: false, error: 'invalid email or password' };
    }

    localStorage.setItem('currentUserEmail', email);
    setUser({ email });

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('currentUserEmail');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signUp, user, login, logout }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within <AuthProvider>');

  return context;
};
