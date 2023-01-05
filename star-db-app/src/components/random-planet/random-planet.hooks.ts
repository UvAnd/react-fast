import { useEffect, useState } from 'react';
import { IPlanet } from 'interfaces/interfaces';
import { getPlanet } from 'utils/swapi-service.utils';

interface IRandomPlanet {
  planetInfo: IPlanet | null;
  isLoading: boolean;
  isError: boolean;
}

const useRandomPlanet = (updateInterval: number): IRandomPlanet => {
  const [planetInfo, setPlanetInfo] = useState<IPlanet | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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

  return { planetInfo, isLoading, isError };
};

export default useRandomPlanet;
