import { useEffect, useState } from 'react';
import { PLANET_STATE } from '../../constants/constants';

import { useGetPlanet } from '../../hooks/swapi-service.hooks'
import { IPlanet } from '../../interfaces/interfaces';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './random-planet.css';

interface IRandomPlanetProps {
  updateInterval?: number;
}

interface IPlanetViewProps {
  planet: IPlanet;
}

const RandomPlanet = ({updateInterval = 2000}: IRandomPlanetProps): JSX.Element => {
  // TODO: optimize Planet state
  const [planetInfo, setPlanetInfo] = useState<IPlanet>(PLANET_STATE);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPlanet = useGetPlanet;

  const onPlanetLoaded = (planetItem: IPlanet) => {
    setPlanetInfo(planetItem);
    setIsLoading(false);
  };

  const onError = () => {
    setIsError(true);
    setIsLoading(false);
  }

  const updatePlanet = () => {
    const ID_RANDOM = Math.floor(Math.random() * 15) + 2;
    const getRandPlanet = getPlanet(ID_RANDOM);
    getRandPlanet.then(onPlanetLoaded).catch(onError);
  }

  useEffect(() => {
    updatePlanet();
    const interval = setInterval(() => {
      updatePlanet();
    }, updateInterval);
    return () => clearInterval(interval);
  }, []);

  const isHasData = !(isLoading || isError);
  const planetView = isHasData && <PlanetView planet={planetInfo}></PlanetView>;

  return (
    <div className="random-planet card jumbotron rounded ">
      {isError && <ErrorIndicator></ErrorIndicator>}
      {isLoading ? <Spinner></Spinner> :  planetView}
    </div>
  );
}

const PlanetView = ({planet}: IPlanetViewProps): JSX.Element => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=''
      />
      <div className='card-body'>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}

// How it work?
// RandomPlanet.defaulteProps = {
//   updateInterval: 10000
// }

export default RandomPlanet;

