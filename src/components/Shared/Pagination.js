import React from 'react';
import Link from 'next/link';

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { formatNumber } from '../../tools/tools';
import usePagination from '../hooks/usePagionation';

const dotts = '...';

const Pagination = ({ totalItems, currentPage, itemsPerPage = 10, renderPageLink }) => {
  const calculatePageNumber = (itemsPerPage, totalItems) => {
    return Math.ceil(++totalItems / ++itemsPerPage);
  };

  const totalPages = calculatePageNumber(itemsPerPage, totalItems);
  const page = Number(currentPage);
  const pages = usePagination(totalItems, currentPage, itemsPerPage);

  const renderPrevPageButton = () => {
    const prevPage = page > 1 ? page - 1 : page;
    return page > 1 ? (
      <Link
        href={prevPage > 1 ? renderPageLink(prevPage) : renderPageLink(0)}
        className='inline-flex h-10 items-center rounded-md px-4 border border-background-600 bg-background-900 hover:bg-accent transition-all'
      >
        <ArrowLeft className='h-5 w-5 text-accent' aria-hidden='true' />
        <span className='md:hidden mx-2'>{formatNumber(prevPage)}</span>
      </Link>
    ) : (
      <span className='inline-flex h-10 items-center rounded-md px-4 border border-background-600 bg-background-900 text-background-400'>
        <ArrowLeft className='h-5 w-5 text-background-400' aria-hidden='true' />
        <span className='md:hidden mx-2'>{formatNumber(prevPage)}</span>
      </span>
    );
  };

  const renderNextPageButton = () => {
    const nextPage = page < totalPages ? page + 1 : page;
    return page < totalPages ? (
      <Link
        href={renderPageLink(nextPage)}
        className='inline-flex h-10 items-center rounded-md px-4 border border-background-600 bg-background-900 hover:bg-accent transition-all'
      >
        <span className='md:hidden mx-2'>{formatNumber(nextPage)}</span>
        <ArrowRight className='h-5 w-5 text-accent' aria-hidden='true' />
      </Link>
    ) : (
      <span className='inline-flex h-10 items-center rounded-md px-4 border border-background-600 bg-background-900 text-background-400'>
        <span className='md:hidden mx-2'>{formatNumber(nextPage)}</span>
        <ArrowRight className='h-5 w-5 text-background-400' aria-hidden='true' />
      </span>
    );
  };

  const renderCurrentPage = (pageNumber, idx) => {
    return (
      <div key={idx} className='inline-flex h-10 items-center rounded-md px-4 bg-accent'>
        {pageNumber}
      </div>
    );
  };

  const renderLinkPage = (pageNumber, idx) => {
    return (
      <Link
        key={'page-' + idx}
        href={pageNumber > 1 ? renderPageLink(pageNumber) : renderPageLink(0)}
        className='inline-flex h-10 items-center rounded-md px-4 border border-background-600 bg-background-900 hover:bg-accent transition-all'
      >
        {pageNumber}
      </Link>
    );
  };

  const renderDotts = (pageNumber, idx) => {
    return (
      <span key={idx} className='px-4 py-2 rounded-full text-sm font-semibold text-white/80 tracking-widest'>
        {pageNumber}
      </span>
    );
  };

  return (
    <>
      {totalPages > 1 && (
        <nav aria-label='Pagination' className='flex items-center justify-between text-sm mt-4 sm:px-0'>
          <div className='min-w-0 flex-1'>{renderPrevPageButton()}</div>

          <div className='flex items-center justify-center sm:hidden text-background-400'>
            {formatNumber(page)} di {formatNumber(totalPages)}
          </div>

          <div className='hidden space-x-2 sm:flex'>
            {pages.map((pageNumber, idx) =>
              pageNumber === dotts
                ? renderDotts(pageNumber, idx)
                : pageNumber === page
                ? renderCurrentPage(pageNumber, idx)
                : renderLinkPage(pageNumber, idx),
            )}
          </div>
          <div className='flex min-w-0 flex-1 justify-end'>{renderNextPageButton()}</div>
        </nav>
      )}
    </>
  );
};

export default Pagination;
