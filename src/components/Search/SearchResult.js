'use client';

import React from 'react';

import { Spinner } from '@nextui-org/spinner';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

import Artist from './Result/Artist';
import Local from './Result/Local';
import Event from './Result/Event';
import Format from './Result/Format';

const getComponentByType = (item, onClick) => {
  const commonProps = {
    key: item.id,
    item,
    className: 'py-2 border-b border-b-white/20',
    onClick,
  };

  switch (item.type) {
    case 'event':
      return <Event {...commonProps} />;
    case 'artist':
      return <Artist {...commonProps} />;
    case 'local':
      return <Local {...commonProps} />;
    case 'format':
      return <Format {...commonProps} />;
    default:
      return null;
  }
};

const SearchResults = ({ term, results, isLoading, isFirstLoad, isEmptyFilter, onClick }) => {
  if (isLoading) {
    return (
      <div className='w-full mt-20 flex items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  if (!isEmptyFilter && !isFirstLoad && results?.length === 0) {
    return (
      <>
        <p className='w-full p-4 mt-20 flex items-center justify-center text-center text-white/80 text-lg font-extralight'>
          {term?.length > 0 ? (
            <span>Uhm, non abbiamo trovato nulla per &quot;{term}&quot;</span>
          ) : (
            <span>Uhm, sembri esigente, che dici di allentare un po&apos; i tuoi filtri?</span>
          )}
        </p>
      </>
    );
  }

  return (
    <ScrollShadow hideScrollBar className='w-full' style={{ maxHeight: 'calc(100vh - 100px)' }}>
      <div className='pb-28'>{results?.map((item) => getComponentByType(item, onClick))} </div>
    </ScrollShadow>
  );
};

export default SearchResults;
