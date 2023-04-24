import { useEffect, useState } from 'react';
import classNames from 'classnames';

import useOrganizationsSearch from '@/hooks/useOrganizationsSearch';
import useDebounce from '@/hooks/useDebounce';

import Input from '@/components/Input';
import Loader from '@/components/Loader';
import Error from '@/components/Error';
import OrganizationSearchByINN from '@/components/OrganizationSearchByINN';

import styles from './OrganizationsSearch.module.scss';

const { organizationsList, dropdown, item, itemDescription, loader } = styles;

const OrganizationsSearch = () => {
  const [query, setQuery] = useState('');
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
  const debounced = useDebounce(query);
  const [organizationsData, loading, error] = useOrganizationsSearch(debounced);
  const [INN, setINN] = useState('');

  useEffect(() => {
    setIsVisibleDropdown(debounced.length > 3 && organizationsData.length > 0);
  }, [debounced, organizationsData]);

  const handleClick = (organizationINN: string) => {
    setINN(organizationINN);
    setIsVisibleDropdown(false);
  };

  return (
    <>
      <Input
        placeholder="Введите значение"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading === 'pending' && <Loader className={classNames(loader)} />}
      {loading === 'rejected' && <Error message={error} />}
      {isVisibleDropdown && (
        <ul className={classNames(dropdown)}>
          {loading === 'fulfilled' && (
            <>
              {organizationsData.map(
                ({
                  data: {
                    name: { short_with_opf, full_with_opf },
                    state: { status },
                    inn,
                    address: { unrestricted_value },
                  },
                }) => (
                  <li
                    key={`${full_with_opf}${unrestricted_value}${status}`}
                    className={classNames(item)}
                    onClick={() => handleClick(inn)}
                  >
                    <span>{short_with_opf}</span>
                    <span className={classNames(itemDescription)}>
                      <span>ИНН {inn}</span>, {unrestricted_value}
                    </span>
                  </li>
                )
              )}
            </>
          )}
        </ul>
      )}
      {INN && <OrganizationSearchByINN INN={INN} className={organizationsList} />}
    </>
  );
};

export default OrganizationsSearch;
