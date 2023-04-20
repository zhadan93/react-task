import { useEffect, useState } from 'react';

import { CurrentCoords, LoadingStatus } from '@/types/types';

import geolocationService from '@/services/geolocationService';
import axios from 'axios';

const useGeolocation = (coords: CurrentCoords): [string, LoadingStatus, string] => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<LoadingStatus>('idle');

  useEffect(() => {
    if (coords.lat !== 200 && coords.lon !== 200) {
      let ignore = false;

      const getCity = async () => {
        try {
          const data = await geolocationService.getGeolocationAddress(coords);

          if (!ignore) {
            setCity(data.suggestions[0].data.city);
            setLoading('fulfilled');
          }
        } catch (err) {
          setLoading('rejected');
          if (axios.isAxiosError(err)) {
            setError(err.response?.data);
          } else if (err instanceof Error) {
            setError(err.message);
          }
        }
      };

      setLoading('pending');
      getCity();

      return () => {
        ignore = true;
      };
    }
  }, [coords]);

  return [city, loading, error];
};

export default useGeolocation;
