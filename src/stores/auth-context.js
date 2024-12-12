import React from 'react';

const AuthContext = React.createContext({
  token: '',
  user: {},
  isLoggedIn: false,
  logout: () => {},
});

export default AuthContext;
