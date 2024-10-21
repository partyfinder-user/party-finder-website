import React, { useEffect, useCallback, useState } from 'react';

import { setCookieValue } from '../tools/tools';
import RootContext from './root-context';

const RootProvider = (props) => {
  const [position, setPosition] = useState('');
  const [footerNavVisible, setFooterNavVisible] = useState('');

  useEffect(() => {
    const position = localStorage.getItem('__pos_prtfn_');
    setCookieValue('__pos_prtfn_', position, 1000);
    setPosition(position);

    const footerNavStaus = localStorage.getItem('__ftr_nav_show_');
    setCookieValue('__ftr_nav_show_', footerNavStaus, 1000);
    setFooterNavVisible(footerNavStaus);
  }, []);

  const setPositionCity = useCallback((value) => {
    localStorage.setItem('__pos_prtfn_', value);
    setCookieValue('__pos_prtfn_', value, 1000);
    setPosition(value);
  }, []);

  const setFooterNavIsVisible = useCallback((value) => {
    localStorage.setItem('__ftr_nav_show_', value);
    setCookieValue('__ftr_nav_show_', value, 1000);
    setFooterNavVisible(value);
  }, []);

  const rootContext = {
    position,
    footerNavVisible,
    setPositionCity,
    setFooterNavIsVisible,
  };

  return <RootContext.Provider value={rootContext}>{props.children}</RootContext.Provider>;
};

export default RootProvider;
