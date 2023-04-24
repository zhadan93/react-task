import { useEffect, useState } from 'react';

import { CurrentCoords, LoadingStatus } from '@/types/types';

const useCoordinates = (): [CurrentCoords, LoadingStatus, string] => {
  const [coords, setCoords] = useState({ lon: 200, lat: 200 });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<LoadingStatus>('idle');

  useEffect(() => {
    const findLocation = () => {
      const success = async (position: GeolocationPosition) => {
        const { longitude: lon, latitude: lat } = position.coords;
        setCoords({ lon, lat });
        setLoading('fulfilled');
      };

      const error = () => {
        setError('Не получается определить ваше местоположение');
        setLoading('rejected');
      };

      if (!navigator.geolocation) {
        setError('Ваш браузер не поддерживает геолокацию...');
      } else {
        setError('');
        setLoading('pending');
        navigator.geolocation.getCurrentPosition(success, error);
      }
    };

    findLocation();
  }, []);

  return [coords, loading, error];
};

export default useCoordinates;
