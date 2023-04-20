import classNames from 'classnames';

import useCoordinates from '@/hooks/useCoordinates';
import useGeolocation from '@/hooks/useGeolocation';

import Loader from '../Loader';
import Error from '../Error';

import styles from './Geolocation.module.scss';

const { article, title, container, section, sectionTitle, secondaryText, geolocationLoader } =
  styles;
const loader = <Loader className={classNames(geolocationLoader)} />;

const Geolocation = () => {
  const [coords, coordinatesLoading, coordinateError] = useCoordinates();
  const [city, geolocationLoading, geolocationError] = useGeolocation(coords);

  const { lon, lat } = coords;

  return (
    <article className={classNames(article)}>
      <h2 className={classNames(title)}>Геолокация</h2>
      <div className={classNames(container)}>
        <section className={classNames(section)}>
          <h3 className={classNames(sectionTitle)}>Координаты</h3>
          {(coordinatesLoading === 'idle' || coordinatesLoading === 'pending') && loader}
          {coordinatesLoading === 'fulfilled' && (
            <>
              <div>
                <span className={classNames(secondaryText)}>Широта:</span> {lat}
              </div>
              <div>
                <span className={classNames(secondaryText)}>Долгота:</span> {lon}
              </div>
            </>
          )}
          {coordinatesLoading === 'rejected' && <Error message={coordinateError} />}
        </section>
        {coordinatesLoading === 'fulfilled' && (
          <section>
            <h3 className={classNames(sectionTitle)}>Город</h3>
            {geolocationLoading === 'pending' && loader}
            {geolocationLoading === 'fulfilled' && city}
            {geolocationLoading === 'rejected' && <Error message={geolocationError} />}
          </section>
        )}
      </div>
    </article>
  );
};

export default Geolocation;
