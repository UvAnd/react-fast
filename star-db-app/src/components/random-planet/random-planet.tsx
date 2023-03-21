import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner';
import PlanetView from 'components/planet-view';
import useRandomPlanet from 'components/random-planet/random-planet.hooks';

import './random-planet.css';

interface IRandomPlanetProps {
  updateInterval?: number;
}

const defaultInterval = 2000;

const RandomPlanet = ({ updateInterval = defaultInterval }: IRandomPlanetProps): JSX.Element => {
  const { planetInfo, isLoading, isError } = useRandomPlanet(updateInterval);
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
