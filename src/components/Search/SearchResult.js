'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Artist from './Result/Artist';
import Local from './Result/Local';
import Event from './Result/Event';
import Format from './Result/Format';

const getComponentByType = (item) => {
  switch (item.type) {
    case 'event':
      return <Event key={item.id} item={item} className='py-2 border-b border-b-background-500' />;
    case 'artist':
      return <Artist key={item.id} item={item} className='py-2 border-b border-b-background-500' />;
    case 'local':
      return <Local key={item.id} item={item} className='py-2 border-b border-b-background-500' />;
    case 'format':
      return <Format key={item.id} item={item} className='py-2 border-b border-b-background-500' />;
    default:
      return null;
  }
};

const SearchResults = ({ term, results, isLoading }) => {
  const [currentResults, setCurrentResults] = useState(results || []);

  useEffect(() => {
    if (!isLoading && results) {
      setCurrentResults(results);
    }
  }, [isLoading, results]);

  const noResults = !isLoading && currentResults.length === 0;

  return (
    <>
      {noResults && (
        <p className='p-4 absolute inset-0 flex items-center justify-center text-center text-white/80 text-lg font-thin'>
          Uhm, non abbiamo trovato nulla per &quot;{term}&quot;
        </p>
      )}

      <div className='relative w-full max-h-full overflow-auto'>
        <AnimatePresence>
          {currentResults.length > 0 && (
            <motion.div
              key='results'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='relative'
            >
              {currentResults.map((item) => getComponentByType(item))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SearchResults;
