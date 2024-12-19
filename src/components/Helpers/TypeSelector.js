'use client';

import React, { useContext } from 'react';

import RootContext from '@/stores/root-context';

const TypeSelector = ({ type }) => {
  const rootCtx = useContext(RootContext);

  const handleTypeClick = (type) => {
    rootCtx.handleTypeSelect(type._id);
  };

  return (
    <div
      key={type._id}
      onClick={() => handleTypeClick(type)}
      className='flex flex-col items-center justify-center gap-3'
    >
      <div className='text-sm px-5 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
        {type.name}
      </div>
    </div>
  );
};

export default TypeSelector;
