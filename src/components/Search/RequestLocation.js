import { useState } from 'react';

import { Crosshair } from '@phosphor-icons/react/dist/ssr';
import { Spinner } from '@nextui-org/react';

function RequestLocation({ onSelect }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCityName = async (latitude, longitude) => {
    try {
      let city;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`,
      );
      const data = await response.json();

      if (data && data.address) {
        city = data.address.city || data.address.town || data.address.village || 'City not found';
      }

      return city;
    } catch (error) {
      setError('Failed to fetch city name.');
    }
  };

  const requestLocation = () => {
    if ('geolocation' in navigator) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLoading(false);

          const { latitude, longitude } = position.coords;
          const city = await fetchCityName(latitude, longitude);
          if (!city) {
            throw new Error('City not found!');
          }
          
          onSelect({ nome: city, geo: { lat: latitude, long: longitude } });
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        },
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className='flex items-center justify-center mt-5'>
      <button
        onClick={requestLocation}
        className='flex items-center mt-4 pl-4 pr-6 py-2.5 bg-accent-500 text-white rounded-lg'
      >
        <Crosshair className='h-5 w-5 mr-1' />
        La mia posizione
      </button>
      {loading && <Spinner className='absolute top-0 right-2' />}
      {error && (
        <p className='text-white/80'>Impossibile usare la tua posizione, per favore cerca manualmente la tua città</p>
      )}
    </div>
  );
}

export default RequestLocation;
