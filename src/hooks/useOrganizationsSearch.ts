import { useEffect, useState } from 'react';
import axios from 'axios';

import { LoadingStatus, OrganizationData } from '@/types/types';

import organizationsService from '@/services/organizationsService';

const useOrganizationsSearch = (query: string): [OrganizationData[], LoadingStatus, string] => {
  const [data, setData] = useState<OrganizationData[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<LoadingStatus>('idle');

  useEffect(() => {
    if (query && query.length > 3) {
      let ignore = false;
      const getOrganizations = async () => {
        try {
          const organizations = await organizationsService.findOrganizations({ query });
          if (!ignore) {
            setData(organizations.suggestions);
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

      setError('');
      setLoading('pending');
      getOrganizations();

      return () => {
        ignore = true;
      };
    }
  }, [query]);

  return [data, loading, error];
};

export default useOrganizationsSearch;
