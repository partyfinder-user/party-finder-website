'use client';

import React from 'react';

import Artist from './Result/Artist';
import Local from './Result/Local';
import Event from './Result/Event';
import Format from './Result/Format';
import { Spinner } from '@nextui-org/spinner';

const getComponentByType = (item, onClick) => {
  const commonProps = {
    key: item.id,
    item,
    className: 'py-2 border-b border-b-background-500',
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

const SearchResults = ({ term, results, isLoading, isFirstLoad, onClick }) => {
  if (isLoading) {
    return (
      <div className='w-full mt-20 flex items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  if (!isFirstLoad && results.length === 0) {
    return (
      <p className='w-full p-4 mt-20 flex items-center justify-center text-center text-white/80 text-lg font-thin'>
        {term?.length > 0 ? (
          <span>Uhm, non abbiamo trovato nulla per &quot;{term}&quot</span>
        ) : (
          <span>Uhm, sembri esigente, qui non c&apos;è nulla! Prova ad allentare un po&apos; i tuoi filtri?</span>
        )}
      </p>
    );
  }

  return (
    <div className='relative w-full max-h-full overflow-auto'>
      {results.map((item) => getComponentByType(item, onClick))}
    </div>
  );
};

export default SearchResults;
