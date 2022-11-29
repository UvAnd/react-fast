import { useEffect, useState } from 'react';

import { useGetPlanet } from 'hooks/swapi-service.hooks';
import { IPlanet } from 'interfaces/interfaces';
import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner';

import './random-planet.css';
import PlanetView from 'components/planet-view';

interface IRandomPlanetProps {
  updateInterval?: number;
}

const defaultInterval = 2000;

const RandomPlanet = ({ updateInterval = defaultInterval }: IRandomPlanetProps): JSX.Element => {
  // TODO: optimize Planet state
  const [planetInfo, setPlanetInfo] = useState<IPlanet | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPlanet = useGetPlanet;

  const onPlanetLoaded = (planetItem: IPlanet): void => {
    setPlanetInfo(planetItem);
    setIsLoading(false);
  };

  const onError = (): void => {
    setIsError(true);
    setIsLoading(false);
  };

  const updatePlanet = (): void => {
    const ID_RANDOM = Math.floor(Math.random() * 15) + 2;
    const getRandPlanet = getPlanet(ID_RANDOM);
    getRandPlanet.then(onPlanetLoaded).catch(onError);
  };

  useEffect(() => {
    updatePlanet();
    const interval = setInterval(() => {
      updatePlanet();
    }, updateInterval);
    return () => clearInterval(interval);
  }, []);

  const isHasData = !(isLoading || isError);
  const planetView = isHasData && <PlanetView planet={planetInfo} />;

  return (
    <div className="random-planet card jumbotron rounded ">
      {isError && <ErrorIndicator />}
      {isLoading ? <Spinner /> : planetView}
    </div>
  );
};

export default RandomPlanet;
