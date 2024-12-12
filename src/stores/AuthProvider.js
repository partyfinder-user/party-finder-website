import React, { useEffect, useCallback, useState } from 'react';

import AuthContext from './auth-context';
import { getUserUUID } from '@/tools/user-tools';
import { getCookieByKey, deleteCookieByKey } from '../tools/tools';

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setUserLoggedIn] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const uuid = getUserUUID();
    const token = localStorage.getItem('accessToken');
    const isLoggedIn = getCookieByKey('__usrlggdin') === 'true' ? true : false;
    const fistName = getCookieByKey('__usrnm');
    const lastName = getCookieByKey('__usrsnm');
    const email = getCookieByKey('__usrmail');
    const user = { uuid, fistName, lastName, email };
    setUser(user);
    setToken(token);
    setUserLoggedIn(isLoggedIn);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserLoggedIn(false);
    localStorage.clear();
    deleteCookieByKey('__usrlggdin');
    deleteCookieByKey('__usrrle');
    deleteCookieByKey('__usrsnm');
    deleteCookieByKey('__usrnm');
    deleteCookieByKey('__usruuid');
    deleteCookieByKey('__usrmail');
    const userUUID = getUserUUID();
    const user = { uuid: userUUID, fistName: '', lastName: '', email: '' };
    setUser(user);
  }, []);

  const authContext = {
    token,
    user,
    isLoggedIn,
    logout,
  };

  return <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
