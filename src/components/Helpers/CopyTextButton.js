'use client';

import React from 'react';
import { Copy } from '@phosphor-icons/react/dist/ssr';

const CopyTextButton = ({ textToCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).catch((err) => {
      console.error('Errore nella copia:', err);
    });
  };

  return (
    <div>
      <button onClick={handleCopy}>
        <Copy className='ml-1 w-5 h-5 text-white' />
      </button>
    </div>
  );
};

export default CopyTextButton;
