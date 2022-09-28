import React, { useEffect, useState } from 'react';

import { useGetPlanet } from '../../hooks/swapi-service.hooks'

import './random-planet.css';

const state = {
  id: 2,
  name: null,
  population: null,
  rotationPeriod: null,
  diameter: null
} as {
  id: number | null,
  name: null,
  population: null,
  rotationPeriod: null,
  diameter: null
}


const RandomPlanet = (): JSX.Element => {
  const [planetInfo, setPlanetInfo] = useState({...state});
  const {id, name, population, rotationPeriod, diameter} = planetInfo;
  const ID = Math.floor(Math.random() * 15) + 2;

  const getPerson = useGetPlanet(ID);

  useEffect(() => {
    getPerson.then((planetItem) => {
      const {planet, id} = planetItem;
      console.log(planetItem);
      console.log('id', id);


      setPlanetInfo({
        id: id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      });
    });
  }, []);


  return (
    <div className="random-planet card jumbotron rounded ">
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
    </div>
  );
}

export default RandomPlanet;

