import React, { useEffect, useCallback, useState } from 'react';

import { setCookieValue } from '../tools/tools';
import RootContext from './root-context';

const RootProvider = (props) => {
  const [position, setPosition] = useState('');

  useEffect(() => {
    const position = localStorage.getItem('__pos_prtfn_');
    setCookieValue('__pos_prtfn_', position, 1000);
    setPosition(position);
  }, []);

  const setPositionCity = useCallback((value) => {
    localStorage.setItem('__pos_prtfn_', value);
    setCookieValue('__pos_prtfn_', value, 1000);
    setPosition(value);
  }, []);

  const rootContext = {
    position,
    setPositionCity,
  };

  return <RootContext.Provider value={rootContext}>{props.children}</RootContext.Provider>;
};

export default RootProvider;
