import React from 'react';
import { cookies } from 'next/headers';

import EventListPage from '@/components/Pages/EventListPage';

async function getData({ page = 1, geo }) {
  const pageLimit = parseInt(process.env.NEXT_PUBLIC_ITEM_PER_PAGE);
  const skip = (page - 1) * pageLimit;

  const body = {
    skip,
    pageLimit,
    ...(geo && { coordinates: [geo.long, geo.lat] }),
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(`${process.env.API_SERVICE_BASE_URL}builder/events`, requestOptions);

  if (!response.ok) {
    throw new Error('Error handling data fetch');
  }

  const data = await response.json();
  return { events: data.events, totalItems: data.count };
}

export default async function EventsPage({ params }) {
  const cookieStore = cookies();
  const __geo_lat_prtfn_ = cookieStore.get('__geo_lat_prtfn_');
  const __geo_long_prtfn_ = cookieStore.get('__geo_long_prtfn_');

  let geo;
  if (
    __geo_lat_prtfn_ &&
    __geo_lat_prtfn_?.value !== 'null' &&
    __geo_long_prtfn_ &&
    __geo_long_prtfn_?.value !== 'null'
  ) {
    geo = { lat: parseFloat(__geo_lat_prtfn_.value), long: parseFloat(__geo_long_prtfn_.value) };
  }

  const currentPage = parseInt(params.page || '1', 10);
  const { events, totalItems } = await getData({ page: currentPage, geo });
  return <EventListPage events={events} totalItems={totalItems} currentPage={currentPage} />;
}
