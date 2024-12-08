import React from 'react';

import ArtistListPage from '@/components/Pages/ArtistListPage';

async function getData({ page = 1 }) {
  const pageLimit = parseInt(process.env.NEXT_PUBLIC_ITEM_PER_PAGE);
  const skip = (page - 1) * pageLimit;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ skip, pageLimit }),
  };

  const response = await fetch(`${process.env.API_SERVICE_BASE_URL}builder/artists`, requestOptions);

  if (!response.ok) {
    throw new Error('Error handling data fetch');
  }

  const data = await response.json();
  return { artists: data.artitst, totalItems: data.count };
}

export default async function ArtistsPaginatePage({ params }) {
  const currentPage = parseInt(params.page || '1', 10);
  const { artists, totalItems } = await getData({ page: currentPage });
  return <ArtistListPage artists={artists} totalItems={totalItems} currentPage={currentPage} />;
}