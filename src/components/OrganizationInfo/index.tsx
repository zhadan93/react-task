import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { OrganizationData } from '@/types/types';

import convertDate from '@/utils/convertDate';

import styles from './OrganizationInfo.module.scss';

const { article, mainTitle, secondaryTitle, smallTitle, group, list, link, item } = styles;

type OrganizationInfoProps = {
  className?: string;
  mainData: OrganizationData[];
  brunchData?: OrganizationData[];
};

const OrganizationInfo: React.FC<OrganizationInfoProps> = ({ className, mainData, brunchData }) => {
  return (
    <article className={classNames(article, className)}>
      {mainData.map(
        ({
          data: {
            founders,
            state: { status, registration_date, liquidation_date },
            name: { short_with_opf, full_with_opf },
            inn,
            address: { unrestricted_value },
          },
        }) => (
          <Fragment key={`${full_with_opf}${unrestricted_value}${status}`}>
            <h2 className={classNames(mainTitle, { [secondaryTitle]: !short_with_opf })}>
              {short_with_opf || full_with_opf}
            </h2>
            {short_with_opf && <div className={classNames(secondaryTitle)}>{full_with_opf}</div>}
            <div className={classNames(group)}>
              <h3 className={classNames(smallTitle)}>ИНН</h3>
              {inn}
            </div>
            <div className={classNames(group)}>
              <h3 className={classNames(smallTitle)}>Статус</h3>
              {status === 'ACTIVE' ? 'Действующая организация' : 'Недействующая организация'}
            </div>
            <div className={classNames(group)}>
              <h3 className={classNames(smallTitle)}>Адрес</h3>
              {unrestricted_value}
            </div>
            <div className={classNames(group)}>
              <h3 className={classNames(smallTitle)}>Основатели компании</h3>
              {founders?.map(({ name }) => <span key={name}>{name}</span>) || '—'}
            </div>
            <div className={classNames(group)}>
              <h3 className={classNames(smallTitle)}>Дата основания</h3>
              {(registration_date && convertDate(registration_date)) || '—'}
            </div>
            <div className={classNames(group)}>
              <h3 className={classNames(smallTitle)}>Дата ликвидации</h3>
              {(liquidation_date && convertDate(liquidation_date)) || '—'}
            </div>
          </Fragment>
        )
      )}
      {brunchData && (
        <div className={classNames(group)}>
          <h3 className={classNames(smallTitle)}>Филиалы</h3>
          {brunchData.length > 0 ? (
            <ul className={classNames(list)}>
              {brunchData.map(
                ({
                  data: {
                    name: { full_with_opf },
                    state: { status },
                    inn,
                    address: { unrestricted_value },
                  },
                }) => (
                  <li
                    key={`${full_with_opf}${unrestricted_value}${status}`}
                    className={classNames(item)}
                  >
                    <Link
                      className={classNames(link)}
                      to={`${inn}`}
                      state={{ query: full_with_opf }}
                    >
                      {full_with_opf}
                    </Link>
                  </li>
                )
              )}
            </ul>
          ) : (
            '—'
          )}
        </div>
      )}
    </article>
  );
};

export default OrganizationInfo;
