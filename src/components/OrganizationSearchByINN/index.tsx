import { OrganizationData } from '@/types/types';

import useOrganizationSearchByINN from '@/hooks/useOrganizationSearchByINN';

import Loader from '@/components/Loader';
import Error from '@/components/Error';
import OrganizationInfo from '../OrganizationInfo';

type OrganizationSearchByINNProps = {
  className?: string;
  INN: string;
};

const OrganizationSearchByINN: React.FC<OrganizationSearchByINNProps> = ({ INN, className }) => {
  const [data, loading, error] = useOrganizationSearchByINN(INN);

  const branches: OrganizationData[] = [];
  const main: OrganizationData[] = [];

  data.forEach((item) =>
    item.data.branch_type === 'MAIN' ? main.push(item) : branches.push(item)
  );

  return (
    <>
      {loading === 'pending' && <Loader />}
      {loading === 'rejected' && <Error message={error} />}
      {loading === 'fulfilled' && (
        <OrganizationInfo mainData={main} brunchData={branches} className={className} />
      )}
    </>
  );
};

export default OrganizationSearchByINN;
