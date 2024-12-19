import React, { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { setCookieValue, deleteCookieByKey } from '../tools/tools';
import RootContext from './root-context';

const RootProvider = (props) => {
  const router = useRouter();
  const [position, setPosition] = useState({});
  const [footerNavVisible, setFooterNavVisible] = useState('');
  const [isSearchPanelOpen, setSearchPanelOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    const city = localStorage.getItem('__pos_prtfn_');
    const lat = localStorage.getItem('__geo_lat_prtfn_');
    const long = localStorage.getItem('__geo_long_prtfn_');
    setCookieValue('__pos_prtfn_', city, 1000);
    setCookieValue('__geo_lat_prtfn_', lat, 1000);
    setCookieValue('__geo_long_prtfn_', long, 1000);

    if (!city) {
      setPosition({});
    } else {
      setPosition({ city, geo: { lat, long } });
    }

    const footerNavStaus = localStorage.getItem('__ftr_nav_show_');
    setCookieValue('__ftr_nav_show_', footerNavStaus, 1000);
    setFooterNavVisible(footerNavStaus);
  }, []);

  const setPositionCity = useCallback(
    (value) => {
      if (!value?.city) {
        localStorage.removeItem('__pos_prtfn_');
        localStorage.removeItem('__geo_lat_prtfn_');
        localStorage.removeItem('__geo_long_prtfn_');
        deleteCookieByKey('__pos_prtfn_');
        deleteCookieByKey('__geo_lat_prtfn_');
        deleteCookieByKey('__geo_long_prtfn_');
        setPosition({});
        router.refresh();
        return;
      }

      localStorage.setItem('__pos_prtfn_', value?.city);
      localStorage.setItem('__geo_lat_prtfn_', value?.geo?.lat);
      localStorage.setItem('__geo_long_prtfn_', value?.geo?.long);
      setCookieValue('__pos_prtfn_', value?.city, 1000);
      setCookieValue('__geo_lat_prtfn_', value?.geo?.lat, 1000);
      setCookieValue('__geo_long_prtfn_', value?.geo?.long, 1000);
      setPosition(value);
      router.refresh();
    },
    [router],
  );

  const setFooterNavIsVisible = useCallback((value) => {
    localStorage.setItem('__ftr_nav_show_', value);
    setCookieValue('__ftr_nav_show_', value, 1000);
    setFooterNavVisible(value);
  }, []);

  const handleTypeSelect = (type) => {
    setSelectedGenres([type]);
    setSearchPanelOpen(true);
  };

  const rootContext = {
    position,
    footerNavVisible,
    isSearchPanelOpen,
    selectedGenres,
    setPositionCity,
    setFooterNavIsVisible,
    setSearchPanelOpen,
    handleTypeSelect
  };

  return <RootContext.Provider value={rootContext}>{props.children}</RootContext.Provider>;
};

export default RootProvider;
