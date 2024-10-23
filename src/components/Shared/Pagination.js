'use client';

import React, { useState } from 'react';

import { Pagination, Button } from '@nextui-org/react';

const PaginationList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className='flex flex-col gap-5'>
      {/* <p className='text-small text-default-500'>Selected Page: {currentPage}</p> */}
      {/* <Pagination total={10} color='secondary' page={currentPage} onChange={setCurrentPage} /> */}
      <div className='flex gap-2'>
        <Button
          size='sm'
          variant='flat'
          color='secondary'
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Precedente
        </Button>
        <Button
          size='sm'
          variant='flat'
          color='secondary'
          onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
        >
          Successivo
        </Button>
      </div>
    </div>
  );
};

export default PaginationList;
