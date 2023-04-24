import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import useOrganizationsSearch from '@/hooks/useOrganizationsSearch';

import OrganizationInfo from '@/components/OrganizationInfo';
import Loader from '@/components/Loader';
import Error from '@/components/Error';

import styles from './BrunchInfo.module.scss';

const { container } = styles;

const BrunchInfo = () => {
  const { state } = useLocation();
  const [data, loading, error] = useOrganizationsSearch(state?.query);

  const brunch = data.filter(
    ({
      data: {
        state: { status },
      },
    }) => status === 'ACTIVE'
  );

  return (
    <div className={classNames(container)}>
      {loading === 'pending' && <Loader />}
      {loading === 'rejected' && <Error message={error} />}
      {loading === 'fulfilled' && <OrganizationInfo mainData={brunch} />}
    </div>
  );
};

export default BrunchInfo;
