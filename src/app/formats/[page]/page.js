import FormatListPage from '@/components/Pages/FormatListPage';
import React from 'react';

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

  const response = await fetch(`${process.env.API_SERVICE_BASE_URL}builder/formats`, requestOptions);

  if (!response.ok) {
    throw new Error('Error handling data fetch');
  }

  const data = await response.json();
  return { formats: data.formats, totalItems: data.count };
}

export default async function FormatsPage({ params }) {
  const currentPage = parseInt(params.page || '1', 10);
  const { formats, totalItems } = await getData({ page: currentPage });
  return <FormatListPage formats={formats} totalItems={totalItems} currentPage={currentPage} />;
}
