import React from 'react';

import LocalListPage from '@/components/Pages/LocalListPage';

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

  const response = await fetch(`${process.env.API_SERVICE_BASE_URL}builder/places`, requestOptions);

  if (!response.ok) {
    throw new Error('Error handling data fetch');
  }

  const data = await response.json();
  return { places: data.places, totalItems: data.count };
}

export default async function LocalsPage({ params }) {
  const currentPage = parseInt(params.page || '1', 10);
  const { places, totalItems } = await getData(currentPage);
  return <LocalListPage places={places} totalItems={totalItems} currentPage={currentPage} />;
}
